import { type Config } from "@/src/utils/get-config";
import { handleError } from "@/src/utils/handle-error";
import { logger } from "@/src/utils/logger";
import { registryResolveItemsTree } from "@/src/utils/registry";
import { spinner } from "@/src/utils/spinner";
import { updateCssVars } from "@/src/utils/updaters/update-css-vars";
import { updateDependencies } from "@/src/utils/updaters/update-dependencies";
import { updateFiles } from "@/src/utils/updaters/update-files";
import { updateTailwindConfig } from "@/src/utils/updaters/update-tailwind-config";

export async function addComponents(
  components: string[],
  config: Config,
  options: {
    overwrite?: boolean;
    silent?: boolean;
    isNewProject?: boolean;
  }
) {
  console.log("addComponents");

  options = {
    overwrite: false,
    silent: false,
    isNewProject: false,
    ...options,
  };
  console.log(options);
  console.log("here1");

  const registrySpinner = spinner(`Checking registry.`, {
    silent: options.silent,
  })?.start();
  console.log("here2", registrySpinner);

  const tree = await registryResolveItemsTree(components, config);
  console.log("here3", tree);

  if (!tree) {
    registrySpinner?.fail();
    return handleError(new Error("Failed to fetch components from registry."));
  }
  registrySpinner?.succeed();
  console.log("here");

  const resupdateTailwindConfig = await updateTailwindConfig(
    tree.tailwind?.config,
    config,
    {
      silent: options.silent,
    }
  );
  console.log(resupdateTailwindConfig);

  const resupdateCssVar = await updateCssVars(tree.cssVars, config, {
    cleanupDefaultNextStyles: options.isNewProject,
    silent: options.silent,
  });

  console.log(resupdateCssVar);

  const resupdateDependencies = await updateDependencies(
    tree.dependencies,
    config,
    {
      silent: options.silent,
    }
  );

  console.log(resupdateDependencies);

  const resupdateFiles = await updateFiles(tree.files, config, {
    overwrite: options.overwrite,
    silent: options.silent,
  });
  console.log(resupdateFiles);

  if (tree.docs) {
    logger.info(tree.docs);
  }
}
