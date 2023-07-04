import sBlock from '../Footer.module.scss';
import s from './Categories.module.scss';
import cn from 'classnames';

export const Categories = () => (
  <section className={s.category}>
    <h2 className={cn(sBlock.title, s.categoryTitle)}>Каталог</h2>

    <ul className={s.categoryList}>
      <li>
        <h3 className={s.categorySubtitle}>Женщины</h3>

        <ul className={s.categorySublist}>
          <li><a className={sBlock.link} href="/">Бюстгальтеры</a></li>
          <li><a className={sBlock.link} href="/">Трусы</a></li>
          <li><a className={sBlock.link} href="/">Носки</a></li>
          <li><a className={sBlock.link} href="/">Халаты</a></li>
          <li><a className={sBlock.link} href="/">Термобелье</a></li>
          <li><a className={sBlock.link} href="/">Пижамы</a></li>
        </ul>
      </li>

      <li>
        <h3 className={s.categorySubtitle}>Мужчины</h3>

        <ul className={s.categorySublist}>
          <li><a className={sBlock.link} href="/">Трусы</a></li>
          <li><a className={sBlock.link} href="/">Носки</a></li>
          <li><a className={sBlock.link} href="/">Халаты</a></li>
          <li><a className={sBlock.link} href="/">Термобелье</a></li>
        </ul>
      </li>
    </ul>
  </section>
);
