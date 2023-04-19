export const parseText = (title: string, text: string | undefined, len: number) => {
  return (
    text ?  (
      text.length > len ? (
        text.slice(0, len) + "..."
      ) : text
    ) : `${title} does not exist`
  )
}