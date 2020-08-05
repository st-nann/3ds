const url: string = "https://www.youtube.com";

export function watchVdo(id: string): string {
  return `${url}/watch?v=${id}`;
}
