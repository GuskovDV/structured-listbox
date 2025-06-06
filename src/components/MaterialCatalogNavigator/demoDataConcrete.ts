export interface Material {
  id: number;
  type: string;
  strengthClass: string;
  name: string;
  standard: string;
  unit: string;
  description: string;
}

export const materialDataConcrete: Material[] = [
  {
    id: 1,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В3.5",
    name: "Бетон тяжёлый класса В3.5, F100, W2",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Для ненагруженных элементов, стяжек, подготовительных слоёв"
  },
  {
    id: 2,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В5",
    name: "Бетон тяжёлый класса В5, F100, W2",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Применяется в ограждающих конструкциях малой прочности"
  },
  {
    id: 3,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В7.5",
    name: "Бетон тяжёлый класса В7.5, F100, W4",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Подбетонка, фундаментные подушки, подготовка под плиты"
  },
  {
    id: 4,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В10",
    name: "Бетон тяжёлый класса В10, F150, W4",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Основания под полы, лестничные марши, стяжки"
  },
  {
    id: 5,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В12.5",
    name: "Бетон тяжёлый класса В12.5, F150, W6",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Перекрытия, перегородки, бетонные лотки и элементы благоустройства"
  },
  {
    id: 6,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В15",
    name: "Бетон тяжёлый класса В15, F200, W6",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Наружные стены, столбы, элементы благоустройства"
  },
  {
    id: 7,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В20",
    name: "Бетон тяжёлый класса В20, F300, W8",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Универсальный конструкционный бетон для жилых и промышленных объектов"
  },
  {
    id: 8,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В20",
    name: "Бетон тяжёлый класса В20, F300, W8, сульфатостойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Для фундаментов и подземных конструкций в агрессивных средах"
  },
  {
    id: 9,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В20",
    name: "Бетон тяжёлый класса В20, F300, W8, быстротвердеющий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Ускоренное твердение, подходит для монолитного домостроения"
  },
  {
    id: 10,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В20",
    name: "Бетон тяжёлый класса В20, F300, W8, трещиностойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Для плит перекрытий и несущих конструкций с повышенной жёсткостью"
  },
{
    id: 11,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В22.5",
    name: "Бетон тяжёлый класса В22.5, F300, W8",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Несущие элементы зданий средней этажности, монолитные пояса"
  },
  {
    id: 12,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В25",
    name: "Бетон тяжёлый класса В25, F300, W10",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Несущие конструкции с требованиями по морозостойкости и водонепроницаемости"
  },
  {
    id: 13,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В27.5",
    name: "Бетон тяжёлый класса В27.5, F300, W10",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Для конструкций с повышенными нагрузками, колонны и балки"
  },
  {
    id: 14,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В30",
    name: "Бетон тяжёлый класса В30, F400, W12",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Фундаменты, плиты и колонны в гражданском и промышленном строительстве"
  },
  {
    id: 15,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В32.5",
    name: "Бетон тяжёлый класса В32.5, F400, W12",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Высоконагруженные элементы, в том числе подземные конструкции"
  },
  {
    id: 16,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В35",
    name: "Бетон тяжёлый класса В35, F400, W14",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Ответственные конструкции, колонны, перекрытия, ядра жёсткости"
  },
  {
    id: 17,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В37.5",
    name: "Бетон тяжёлый класса В37.5, F400, W14",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Промышленные объекты с высокими нагрузками, цокольные этажи"
  },
  {
    id: 18,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В40",
    name: "Бетон тяжёлый класса В40, F500, W16",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Мостовые плиты, опоры, резервуары, зоны с резкими перепадами температур"
  },
  {
    id: 19,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В40",
    name: "Бетон тяжёлый класса В40, F500, W16, сульфатостойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Инженерные сооружения, соприкасающиеся с агрессивной влажной средой"
  },
  {
    id: 20,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В40",
    name: "Бетон тяжёлый класса В40, F500, W16, трещиностойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Для плит перекрытий, ростверков и стен, где важна трещиностойкость"
  },
  {
    id: 11,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В22.5",
    name: "Бетон тяжёлый класса В22.5, F300, W8",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Несущие элементы зданий средней этажности, монолитные пояса"
  },
  {
    id: 12,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В25",
    name: "Бетон тяжёлый класса В25, F300, W10",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Несущие конструкции с требованиями по морозостойкости и водонепроницаемости"
  },
  {
    id: 13,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В27.5",
    name: "Бетон тяжёлый класса В27.5, F300, W10",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Для конструкций с повышенными нагрузками, колонны и балки"
  },
  {
    id: 14,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В30",
    name: "Бетон тяжёлый класса В30, F400, W12",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Фундаменты, плиты и колонны в гражданском и промышленном строительстве"
  },
  {
    id: 15,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В32.5",
    name: "Бетон тяжёлый класса В32.5, F400, W12",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Высоконагруженные элементы, в том числе подземные конструкции"
  },
  {
    id: 16,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В35",
    name: "Бетон тяжёлый класса В35, F400, W14",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Ответственные конструкции, колонны, перекрытия, ядра жёсткости"
  },
  {
    id: 17,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В37.5",
    name: "Бетон тяжёлый класса В37.5, F400, W14",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Промышленные объекты с высокими нагрузками, цокольные этажи"
  },
  {
    id: 18,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В40",
    name: "Бетон тяжёлый класса В40, F500, W16",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Мостовые плиты, опоры, резервуары, зоны с резкими перепадами температур"
  },
  {
    id: 19,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В40",
    name: "Бетон тяжёлый класса В40, F500, W16, сульфатостойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Инженерные сооружения, соприкасающиеся с агрессивной влажной средой"
  },
  {
    id: 20,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В40",
    name: "Бетон тяжёлый класса В40, F500, W16, трещиностойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Для плит перекрытий, ростверков и стен, где важна трещиностойкость"
  },
  {
    id: 41,
    type: "Газобетон автоклавный по ГОСТ 31359-2007",
    strengthClass: "В3.5",
    name: "Газобетон автоклавный D600, В3.5, F50",
    standard: "ГОСТ 31359-2007",
    unit: "м³",
    description: "Газобетон с повышенной морозостойкостью для внешних стен"
  },
  {
    id: 42,
    type: "Газобетон автоклавный по ГОСТ 31359-2007",
    strengthClass: "В2.5",
    name: "Газобетон автоклавный D500, В2.5, F35",
    standard: "ГОСТ 31359-2007",
    unit: "м³",
    description: "Газобетон общего назначения с базовой морозостойкостью"
  },
  {
    id: 43,
    type: "Бетон гидротехнический по ГОСТ 4795-2019",
    strengthClass: "В25",
    name: "Бетон гидротехнический класса В25, F300, W12",
    standard: "ГОСТ 4795-2019",
    unit: "м³",
    description: "Используется в фундаментах, водопропускных сооружениях и каналах"
  },
  {
    id: 44,
    type: "Бетон гидротехнический по ГОСТ 4795-2019",
    strengthClass: "В30",
    name: "Бетон гидротехнический класса В30, F400, W14",
    standard: "ГОСТ 4795-2019",
    unit: "м³",
    description: "Подходит для резервуаров, плотин и насосных станций"
  },
  {
    id: 45,
    type: "Бетон гидротехнический по ГОСТ 4795-2019",
    strengthClass: "В35",
    name: "Бетон гидротехнический класса В35, F400, W16",
    standard: "ГОСТ 4795-2019",
    unit: "м³",
    description: "Для заглублённых и загруженных участков ГТС"
  },
  {
    id: 46,
    type: "Бетон гидротехнический по ГОСТ 4795-2019",
    strengthClass: "В40",
    name: "Бетон гидротехнический класса В40, F500, W18",
    standard: "ГОСТ 4795-2019",
    unit: "м³",
    description: "Применяется в мостовых опорах, туннелях и дамбах"
  },
  {
    id: 47,
    type: "Бетон гидротехнический по ГОСТ 4795-2019",
    strengthClass: "В45",
    name: "Бетон гидротехнический класса В45, F600, W20, сульфатостойкий",
    standard: "ГОСТ 4795-2019",
    unit: "м³",
    description: "Высокоустойчив к агрессивным водам, применяется в насосных и очистных сооружениях"
  },
  {
    id: 48,
    type: "Бетон жаростойкий по ГОСТ 20910-75",
    strengthClass: "В10",
    name: "Бетон жаростойкий класса В10",
    standard: "ГОСТ 20910-75",
    unit: "м³",
    description: "Применяется в облицовке каминов, печей, дымоходов"
  },
  {
    id: 49,
    type: "Бетон жаростойкий по ГОСТ 20910-75",
    strengthClass: "В15",
    name: "Бетон жаростойкий класса В15",
    standard: "ГОСТ 20910-75",
    unit: "м³",
    description: "Используется в конструкциях с периодическим нагревом до 500 °C"
  },
  {
    id: 50,
    type: "Бетон жаростойкий по ГОСТ 20910-75",
    strengthClass: "В20",
    name: "Бетон жаростойкий класса В20, жаростойкость до 800 °C",
    standard: "ГОСТ 20910-75",
    unit: "м³",
    description: "Для промышленных печей, металлургических и коксохимических агрегатов"
  },
  {
    id: 51,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В25",
    name: "Бетон тяжёлый класса В25, F300, W10, сульфатостойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Усиленные фундаменты и конструкции подземной части зданий"
  },
  {
    id: 52,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В30",
    name: "Бетон тяжёлый класса В30, F400, W12, быстротвердеющий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Монолитные работы с требованиями к сокращённым срокам распалубки"
  },
  {
    id: 53,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В35",
    name: "Бетон тяжёлый класса В35, F400, W14, трещиностойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Плиты перекрытий, стеновые панели, участки с перепадами температур"
  },
  {
    id: 54,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В40",
    name: "Бетон тяжёлый класса В40, F500, W16, химстойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Заводы, очистные сооружения, склады агрессивных веществ"
  },
  {
    id: 55,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В45",
    name: "Бетон тяжёлый класса В45, F600, W16, антисептический",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Медучреждения, лаборатории, склады пищевой продукции"
  },
  {
    id: 56,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В60",
    name: "Бетон тяжёлый класса В60, F800, W20, радиационно-стойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "Спецобъекты: атомные станции, рентген- и томографические помещения"
  },
  {
    id: 57,
    type: "Бетон тяжёлый по ГОСТ 26633-2015",
    strengthClass: "В25",
    name: "Бетон тяжёлый класса В25, F300, W10, трещиностойкий, сульфатостойкий",
    standard: "ГОСТ 26633-2015",
    unit: "м³",
    description: "ЖБК и монолит в подземной части, где важны герметичность и прочность"
  }
];