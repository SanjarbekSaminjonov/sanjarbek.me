import {ChildrenProps} from "../types";

export const Container = ({children}: ChildrenProps) => {
  return (
    <div className={"container container-sm mx-auto max-w-xl px-4 lg:px-0"}>{children}</div>
  )
}