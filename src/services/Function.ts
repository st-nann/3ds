const url: string = "//www.youtube.com";

export function watchVdo(id: string): string {
  return `${url}/watch?v=${id}&showinfo=0&enablejsapi=1&origin=${process.env.VUE_APP_BASEURL}`;
}
