import Image from 'next/image';

const Sidebar = () => {
  const year = new Date().getFullYear();
  const data = {
    gavarta: 'https://avatars.githubusercontent.com/u/33513256?s=400&v=4',
    name: 'Xifo',
  };

  const menu = [
    {
      title: '首页',
      path: '/',
    },
    {
      title: '博客',
      path: '/blog',
    },
    {
      title: '笔记',
      path: '/note',
    },
    {
      title: '项目',
      path: '/project',
    },
    {
      title: '关于',
      path: '/about',
    },
  ];

  return (
    <div className="fixed w-75 h-screen left-0 top-0">
      <div className="flex flex-col w-full h-full text-center">
        <div className="author pt-8">
          <Image
            className="mx-auto mb-2 rounded-full"
            src={data.gavarta}
            alt={data.name}
            width={64}
            height={64}
            priority
          />
          <div>
            <h3 className="relative text-4xl leading-none font-bold">
              <span
                className="text-gray-500 tracking-widest select-none"
                style={{ fontFamily: 'var(--font-dancing-script)' }}
              >
                Deep Clone
              </span>
              <span
                className="text-lg absolute top-1/2 left-1/2 -translate-1/2 tracking-wider"
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                {data.name}
              </span>
            </h3>
          </div>
        </div>

        <div className="mt-8 flex-1">
          {menu.map((item, index) => (
            <div key={index} className="mt-4">
              <a
                href={item.path}
                className="text-base text-gray-500 hover:text-gray-700"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>

        <div
          className="max-w-3/4 mx-auto pb-4 text-gray-400 text-xs tracking-wider"
          style={{ fontFamily: 'var(--font-geist-mono)' }}
        >
          Copyright © {year} {data.name}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
