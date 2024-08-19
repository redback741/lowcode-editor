import { PropsWithChildren } from "react";

function Page({children}: PropsWithChildren) {

  return (
    <div className="box-border h-[100%] p-[20px]"> 
    {children}
    </div>
  )
}

export default Page;