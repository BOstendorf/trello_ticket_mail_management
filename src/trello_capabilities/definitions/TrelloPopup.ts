import { TrelloInterface, TrelloInterfaceOptions } from "../shared_definitions";

type TrelloPopupItem_base = {
  text: string;
  alwaysVisible?: boolean;
}

type TrelloPopupItem_callback = TrelloPopupItem_base & { callback: (t: TrelloInterface, options: TrelloInterfaceOptions) => void };
type TrelloPopupItem_url = TrelloPopupItem_base & { url: string };
type TrelloPopupItem_both = TrelloPopupItem_base & { callback: Function; url: string};
export type TrelloPopupItem = TrelloPopupItem_callback | TrelloPopupItem_url | TrelloPopupItem_both;
type TrelloPopupItemPromise = () => Promise<TrelloPopupItem>;
type TrelloPopupSearch = {
  count?: number;
  placeholder?: string;
  empty?: string;
  searching?: string;
  debounce?: number;
}

type PopupOptions = {
  title: string;
  items: TrelloPopupItems;
  search?: TrelloPopupSearch;
}

type IframePopupOptions = {
  title: string;
  url: string;
  args?: any;
  height: number;
}

export type TrelloPopupItems = TrelloPopupItem[] | TrelloPopupItemPromise;
export type TrelloPopupFunction = (options: PopupOptions | IframePopupOptions) => void;

