export enum ListItemType {
  YesNo = 'YesNo',
  FreeText = 'FreeText',
  Photo = 'Photo',
}

type BaseListItem = {
  id: string;
  label: TranslatableLabel;
};

export type TranslatableLabel = {
  [langCode: string]: string;
};

export type YesNoListItem = BaseListItem & {
  type: ListItemType.YesNo;
};

export type FreeTextItem = BaseListItem & {
  type: ListItemType.FreeText;
  maxLength: number;
};

export type PhotoItem = BaseListItem & {
  type: ListItemType.Photo;
  maxNumber: number;
};

// TODO: TaskItem => only a checkbox with a label "Have you finished washing up?"

export type CheckListItem = YesNoListItem | FreeTextItem | PhotoItem;

export type CheckList = {
  id: string;
  items: CheckListItem[];
};
