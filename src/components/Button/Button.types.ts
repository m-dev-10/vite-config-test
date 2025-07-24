import type { ReactNode } from "react"

export type TButtonProps = {
	children: ReactNode;
	onClick?: ()=>void;
}