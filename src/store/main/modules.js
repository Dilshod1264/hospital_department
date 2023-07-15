import { post } from "../data/posts"
import { album } from "../data/album"
import { helpers } from "../data/helper"
import { layout } from "./layout"
import { auth } from "./auth"

export const modules = {
   auth,
   layout,
   post,
   album,
   helpers,
}