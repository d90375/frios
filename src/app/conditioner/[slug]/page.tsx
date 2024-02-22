import { productData } from "@/data";

import Image from "next/image";

interface Characteristics {
  children: { header: string; body: { title: string; desc: string }[] }[];
}

const Characteristics = ({ children }: Characteristics) => {
  return (
    <div className="flex flex-col">
      {children.map(({ header, body }) => (
        <div key={header}>
          <p className="font-lg font-bold text-center mb-4">{header}</p>
          <div className="flex flex-col">
            {body.map(({ title, desc }) => (
              <div key={title} className="inline-flex gap-2 ml-2">
                <p className="font-medium w-[200px] md:w-[700px]">{title}</p>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

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
    <div className="px-5 md:px-[20%] bg-white rounded-lg pt-10 pb-20 flex flex-col items-start gap-5">
      <h1 className="text-[24px] text-center md:text-start self-center leading-[28px] mb-10 md:leading-[44px] md:text-[44px] font-jost font-semibold">
        {product.title}
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src={product.url}
          alt={product.title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-[300px] object-contain"
        />

        <div className="flex flex-col">
          <h3 className="text-gray-500 border font-medium rounded mb-2 w-fit py-0.5 px-3 border-gray-300">
            Описание
          </h3>
          <div>
            <p className="mb-2 font-medium ">
              Безупречность линий в сочетании с уникальными технологиями
              позволяет по-новому взглянуть на традиционные сплит-системы. Тихая
              работа, А класс энергоэффективности, 4 скорости потока воздуха и I
              FEEL климат контроль подарят Вам истинное наслаждение от
              использования новой сплит-системы Olympio.
            </p>
            <ul className="list-disc ml-6 text-sm mb-6">
              <li>А класс энергоэффективности</li>
              <li>Тихий режим работы SILENCE - 24dB(A)</li>
              <li>Функция ≪Горячий старт≫</li>
              <li>Режим максимальной производительности (STRONG)</li>
              <li>
                Воздушный HD-фильтр высокой плотности – в 3 раза более
                эффективный
              </li>
              <li>
                Функция самоочистки внутреннего блока (предотвращение появления
                плесени и неприятного запаха)
              </li>
              <li>
                Скрытый LED-дисплей, появляется на панели при включении
                кондиционера
              </li>
              <li>
                Расширенная функция TIMER 24 на включение и выключение
                кондиционера
              </li>
              <li>Фильтр Vitamin C</li>
              <li>I FEEL климат контроль</li>
              <li>Бесшумный режим ≪SILENCE≫</li>
              <li>Режим максимальной производительности STRONG</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-gray-500 font-medium mb-2 border rounded w-fit py-0.5 px-3 border-gray-300">
          Характеристики
        </h3>
        <Characteristics>
          {[
            {
              header: "Основные",
              body: [
                { title: "Бренд", desc: "Ballu" },
                { title: "Серия", desc: "Olympio" },
                { title: "Хладагент", desc: "Ballu" },
                { title: "Мин. поддерживаемая температура", desc: "-7 °С" },
                {
                  title: "Макс. рабочая температура воздуха для внешнего блока",
                  desc: "43 °С",
                },
                {
                  title: "Мин. рабочая температура воздуха для внешнего блока",
                  desc: "-7 °С",
                },
                {
                  title: "Цвет корпуса внешнего блока",
                  desc: "Белый",
                },
                {
                  title: "Цвет корпуса внутр. блока",
                  desc: "Белый",
                },
                {
                  title: "Гарантийный срок",
                  desc: "3 года",
                },
                {
                  title: "Страна производства",
                  desc: "КНР",
                },
              ],
            },
            {
              header: "Потребительские",
              body: [
                { title: "Эффективен для помещ. площадью до", desc: "21 м2" },
                { title: "Макс. уровень шума внешнего блока", desc: "50 дБ" },
                { title: "Уровень шума внутр. блока", desc: "24 дБ" },
              ],
            },
            {
              header: "Производительность",
              body: [
                {
                  title: "Макс. производительность обогрева",
                  desc: "2.2 кВт",
                },
                {
                  title: "Макс. производительность охлаждения",
                  desc: "2.1 кВт",
                },
                { title: "Макс. расход воздуха", desc: "420 м3/час" },
                {
                  title: "Номинальная производительность обогрева",
                  desc: "2.2 кВт",
                },
                {
                  title: "Номинальная производительность охлаждения",
                  desc: "2.1 кВт",
                },
              ],
            },
          ]}
        </Characteristics>
      </div>
    </div>
  );
}
