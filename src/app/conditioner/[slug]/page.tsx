import SectionContainer from "@/components/SectionContainer";
import { productData } from "@/data";

import Image from "next/image";

export const generateStaticParams = async () => {
  const paths = productData.map((p) => ({
    slug: p.title.replace(/ /g, "-"),
  }));

  return paths;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = decodeURI(params.slug);

  //   const sortedCoreContents = allCoreContent(sortPosts(allBlogs));
  //   const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug);
  //   if (postIndex === -1) {
  //     return notFound();
  //   }
  //   const prev = sortedCoreContents[postIndex + 1];
  //   const next = sortedCoreContents[postIndex - 1];

  const product = productData.find((p) => p.title.replace(/ /g, "-") === slug);

  //   const jsonLd = post.structuredData;
  //   jsonLd["author"] = authorDetails.map((author) => {
  //     return {
  //       "@type": "Person",
  //       name: author.name,
  //     };
  //   });

  if (!product) {
    return;
  }

  return (
    <SectionContainer className="p-[30px] h-full my-[30px] bg-white rounded-[20px]">
      <Image
        src={product.url}
        alt={product.title}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-[300px] object-contain"
      />

      <h2 className="text-[44px] uppercase font-sans font-bold leading-[48px] py-[30px]">
        {product.title}
      </h2>
      <div className="shadow-[0px_2px_8px_0px_rgba(8,35,48,0.24)] flex items-center justify-between py-4 px-[24px] rounded-[10px]">
        <h6 className="text-[18px] font-medium leading-[28px] tracking-[0.15]">
          Техническая спецификация
        </h6>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6272_1562)">
            <path
              d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM18.7 9.2L11.4 17.4C11.1 17.7 10.7 17.9 10.3 17.9C9.9 17.9 9.5 17.7 9.2 17.5L5.4 13.7C4.8 13.1 4.8 12.2 5.4 11.6C6 11 6.9 11 7.5 11.5L10.2 14.2L16.5 7.1C17 6.6 17.9 6.5 18.6 7C19.2 7.6 19.2 8.5 18.7 9.2Z"
              fill="black"
            />
            <ellipse cx="12" cy="12" rx="12" ry="12" fill="#45B2EA" />
            <path
              d="M10.5 7.5L15 12L10.5 16.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_6272_1562">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
    </SectionContainer>
  );
}
