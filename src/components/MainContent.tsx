import Card from '@/components/Card';

interface Section {
  title: string;
  text: string;
  list?: string[];
}


const textContent: Section[] = [
  {
    title: 'Промоакции и Бонусы Онлайн-Казино',
    text: 'Добро пожаловать на наш сайт — место, где собраны лучшие предложения и эксклюзивные бонусы от популярных онлайн-казино! Здесь вы найдете топовые промоакции, которые позволят получить дополнительные фриспины, увеличить депозит и воспользоваться специальными бонусами за регистрацию.'
  },
  {
    title: 'Фриспины за Регистрацию',
    text: 'Фриспины — это бесплатные вращения в слотах, которые многие казино предлагают новым игрокам при регистрации. Это отличный способ попробовать популярные игры без вложений и получить реальный шанс на выигрыш. Мы собрали для вас список казино с выгодными предложениями на фриспины, чтобы вы могли начать игру с максимальной выгодой.'
  },
  {
    title: 'Бонусы на Первый Депозит',
    text: 'Бонусы на первый депозит — один из самых популярных видов промоакций. Внесите определённую сумму на свой игровой счет и получите дополнительный процент к депозиту! Например, многие казино предлагают бонус до 100% на первый депозит — это значит, что вы удваиваете свои средства для игры. Некоторые заведения могут предложить бонусы до 5000 EUR, что открывает ещё больше возможностей для захватывающего геймплея.'
  },
  {
    title: 'Промокоды и Эксклюзивные Бонусы',
    text: 'Ищете что-то особенное? Мы предоставляем промокоды, которые дают доступ к эксклюзивным акциям, недоступным для широкой аудитории. Введите промокод при регистрации или пополнении счета, и вы получите дополнительные фриспины, бонусные средства или увеличенный процент на депозит.'
  },
  {
    title: 'Программы Лояльности и VIP-бонусы',
    text: 'Многие онлайн-казино предлагают специальные программы для постоянных игроков. Это могут быть еженедельные бонусы, персональные подарки, повышенные лимиты на вывод и многое другое. Программы лояльности позволяют получать дополнительные привилегии и наслаждаться игрой на особых условиях.'
  },
  {
    title: 'Как Получить Бонусы?',
    text: '1. Выберите казино из нашего списка — мы публикуем только проверенные и лицензированные платформы.\n2. Ознакомьтесь с условиями акции — обратите внимание на минимальный депозит, требование по вейджеру и другие детали.\n3. Пройдите регистрацию и введите промокод (если требуется) для активации бонуса.\n4. Пополните счет и начните играть с увеличенными возможностями!',
    list: [
      '1. Выберите казино из нашего списка — мы публикуем только проверенные и лицензированные платформы.',
      '2. Ознакомьтесь с условиями акции — обратите внимание на минимальный депозит, требование по вейджеру и другие детали.',
      '3. Пройдите регистрацию и введите промокод (если требуется) для активации бонуса.',
      '4. Пополните счет и начните играть с увеличенными возможностями!'
    ],
  },
  {
    title: 'Поддержка Игроков и Безопасность',
    text: 'Мы следим за актуальностью всех промоакций и публикуем информацию только о лицензированных казино с надежной репутацией. Это гарантирует честность игры и безопасность ваших данных.'
  }
];

const cardsContent = [{
  mediaUrl: 'banda-gif.mp4',
  description: '800 фриспинов',
  code: 'CASINOHUB',
  url: 'https://play-banda-one.com/d300573ec',
}, {
  mediaUrl: 'lex1.MP4',
  description: '150% бонуса и до 500 фриспинов на первый депозит по ПРОМОКОДУ FreeRoyal',
  code: 'FreeRoyal',
  url: 'https://gzb-ircp01.com/cc7eb5933'
},{
  mediaUrl: '/gizboph.jpg',
  description: '150% бонуса и до 500 фриспинов на первый депозит по ПРОМОКОДУ FreeRoyal',
  code: 'FreeRoyal',
  url: 'https://1go-ircp01.com/c83a3ae77',
  photo: true
}, {
  mediaUrl: '/1go.jpg',
  description: '150% бонуса и до 500 фриспинов на первый депозит по ПРОМОКОДУ FreeRoyal',
  code: 'FreeRoyal',
  url: 'https://lex-ircp01.com/c96d95a4e',
  photo: true
}]

const MainContent = () => (
  <div className="flex flex-col gap-y-[40px]">
    <div
      className="grid grid-cols-1 lg:grid-cols-4 lg:pl-[10vw] lg:pr-[10vw] lg:pt-[25px] lg:pb-[25px] p-[25px] gap-[10px] lg:gap-[2.6vw]">
      {cardsContent.map((card) => (
        <Card key={card.url} url={card.url} mediaUrl={card.mediaUrl} code={card.code} description={card.description} photo={card.photo} />
      ))}
    </div>
    <div className="flex flex-col gap-y-[30px] lg:pl-[10vw] lg:pr-[10vw] p-[25px]">
      {textContent.map((item) => (
        <section key={item.title} className="flex flex-col gap-y-[15px]">
          <h2 className="text-3xl font-semibold">{item.title}</h2>
          {item.list && item.list.length
            ? (<ol>
              {item.list.map((listItem) => (
                <li key={listItem} >{listItem}</li>
              ))}
            </ol>)
            : (<p>{item.text}</p>)
          }
        </section>
      ))}
    </div>
  </div>

)

export default MainContent