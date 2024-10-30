'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

// Constants
import { FONT_SIZE, FONT_WEIGHT, TAG } from '@/constants';

// Components
import { Typography } from '@/ui/components';
import Tabs from '@/ui/components/Tabs';
import { Panel } from '@/ui/components/Tabs/Panel';

const Description = () => {
  const [selectedTab, setSelectedTab] = useState<string>('description');

  const list = useMemo(
    () => [
      { title: 'Description', value: 'description' },
      { title: 'Review ( 5 )', value: 'rating' }
    ],
    []
  );

  const handleChangeTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedTab(event.currentTarget.value);
  };

  return (
    <section className="my-20 bg-gray-light">
      <div className="container py-10">
        <Tabs list={list} index={selectedTab} onClick={handleChangeTab} />
        <Panel index={selectedTab} tabIndex="description">
          <div className="mt-10">
            <Typography
              fontWeight={FONT_WEIGHT.BOLD}
              tag={TAG.H4}
              size={FONT_SIZE.X_SMALL}
            >
              Detail Product
            </Typography>
            <ul className="ml-6 list-disc mt-4">
              <li className="leading-10 text-dark-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="leading-10 text-dark-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="leading-10 text-dark-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
          </div>
        </Panel>
        <Panel index={selectedTab} tabIndex="rating">
          <div className="mt-10 flex justify-center">
            <Image src="/star.svg" alt="star" width={106} height={18} />
          </div>
        </Panel>
      </div>
    </section>
  );
};

export default Description;
