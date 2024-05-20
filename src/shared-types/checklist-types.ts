export enum ListItemType {
  YesNo = 'YesNo',
  FreeText = 'FreeText',
  Photo = 'Photo'
}

export   type TranslatableLabel = {
  [langCode: string]: string;
}

export type YesNoListItem = {
  type: ListItemType.YesNo,
  label: TranslatableLabel;
}

export type FreeTextItem = {
  type: ListItemType.FreeText,
  label: TranslatableLabel;
  maxLength: number;
}

export type PhotoItem = {
  type: ListItemType.Photo,
  label: TranslatableLabel;
  maxNumber: number;
}

export type CheckListItem = YesNoListItem | FreeTextItem | PhotoItem;

export type CheckList = {
  id: string;
  items: CheckListItem[];
}
