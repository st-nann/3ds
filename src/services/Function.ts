import _ from "lodash";

export function getImage(name: string): string {
  return `https://firebasestorage.googleapis.com/v0/b/partyhaan-system-scb10x.appspot.com/o/${name}.png?alt=media`;
}

export function filterLists(lists: object[], status: string) {
  return _.filter(lists, { status });
}
