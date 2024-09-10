"use client";

import { Tabs, TabList, Tab, TabContent} from "@/lib/components/core/default/react/navigation/tabs";
import { Button } from "@/lib/components/core/default/react/buttons/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/lib/components/core/default/react/data-display/card";
import { TextField } from "@/lib/components/core/default/react/input/text-field";
import { Label } from "@/lib/components/core/default/react/input/label";

export default function TabsDemo() {
   return (
      <Tabs defaultValue="account" className="w-[400px]">
         <TabList className="grid w-full grid-cols-2">
            <Tab value="account">Account</Tab>
            <Tab value="password">Password</Tab>
         </TabList>
         <TabContent value="account">
            <Card>
               <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                     Make changes to your account here. Click save when you're done.
                  </CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                  <div className="space-y-1">
                     <Label htmlFor="name">Name</Label>
                     <TextField id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                     <Label htmlFor="username">Username</Label>
                     <TextField id="username" defaultValue="~peduarte" />
                  </div>
               </CardContent>
               <CardFooter>
                  <Button>Save changes</Button>
               </CardFooter>
            </Card>
         </TabContent>
         <TabContent value="password">
            <Card>
               <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                     Change your password here. After saving, you'll be logged out.
                  </CardDescription>
               </CardHeader>
               <CardContent className="space-y-2">
                  <div className="space-y-1">
                     <Label htmlFor="current">Current password</Label>
                     <TextField id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                     <Label htmlFor="new">New password</Label>
                     <TextField id="new" type="password" />
                  </div>
               </CardContent>
               <CardFooter>
                  <Button>Save password</Button>
               </CardFooter>
            </Card>
         </TabContent>
      </Tabs>
   )
}
