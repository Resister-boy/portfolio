export const parseBlockMap = {
  "paragraph": "text-md leading-10",
  "heading_1": "text-5xl font-bold",
  "heading_2": "text-2xl font-semibold",
  "heading_3": "text-xl font-semibold",
  "quoteBg": "border-l-[2px]",
  "quoteContent": "text-md ml-4",
  "calloutBg": "bg-gray-200 p-4",
  "calloutContent": "text-md",
  "bulletedListItem": "text-md ml-4 my-4",
}

export const textAnotation = (text: any) => {
  let annotation: string[] = [];

  if (text.annotations.bold === true)
    annotation.push('font-semibold');
  if (text.annotations.code === true)
    annotation.push('bg-slate-200 rounded-sm text-red-500');
  if (text.annotations.underline === true)
    annotation.push('underline');
  return (annotation.join(' '));
}

export const renderBlockObject = ({ block }: any) =>{
  switch (block.type) {
    case "paragraph" :
      return ({
          styles: `${parseBlockMap["paragraph"]} ${textAnotation(block.paragraph.rich_text[0])}`, 
          content: block.paragraph.rich_text[0].plain_text,
          background: "my-8 px-2",
        })
    case "heading_1":
      return ({
        styles: parseBlockMap["heading_1"],
        content: block.heading_1.rich_text[0].plain_text,
        background: "mt-12 mb-4",
      })
    case "heading_2":
      return ({
        styles: parseBlockMap["heading_2"],
        content: block.heading_2.rich_text[0].plain_text,
        background: "mt-12 mb-4",
      })
    case "heading_3":
      return ({
        styles: parseBlockMap["heading_3"],
        content: block.heading_3.rich_text[0].plain_text,
        background: "mt-8 mb-4",
      })
    case "quote":
      return ({
        styles: parseBlockMap["quoteContent"],
        content: block.quote.rich_text[0].plain_text,
        background: parseBlockMap["quoteBg"]
      })
    case "callout":
      return ({
        styles: parseBlockMap["calloutContent"],
        content: block.callout.rich_text[0].plain_text,
        background: parseBlockMap["calloutBg"]
      })
    case "bulleted_list_item":
      return ({
        styles: parseBlockMap["bulletedListItem"],
        content: `• ${block.bulleted_list_item.rich_text[0].plain_text}`,
        background: ""
      })
    default:
      return ({
        styles: "",
        content: "",
        background: "w-full border-b-[1px]"
      })
  }
}