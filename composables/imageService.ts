export const imageService = (url:string, size:string, format:string) => {
    return url+"/m/"+size+"/filters:format("+format+")";
}