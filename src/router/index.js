import Vue from 'vue';
import Router from 'vue-router';

// 加载路由规则对应的组件
import HeroesList from '@/views/heroes/list';
import WeaponsList from '@/views/weapons/list';
import EquipsList from '@/views/equips/list';

import HeroesAdd from '@/views/heroes/add';
import HeroesEdit from '@/views/heroes/edit';

import WeaponsAdd from '@/views/weapons/add';
import WeaponsEdit from '@/views/weapons/edit';

Vue.use(Router);

export default new Router({
  routes: [
    // {name: 'home', path: '/', redirect: {name: 'heroes'}},
    {name: 'heroes', path: '/heroes', component: HeroesList},
    {name: 'equips', path: '/equips', component: EquipsList},
    {name: 'weapons', path: '/weapons', component: WeaponsList},
    {name: 'heroesadd', path: '/heroes/add', component: HeroesAdd},
    {name: 'heroesedit', path: '/heroes/edit', component: HeroesEdit},
    {name: 'home', path: '/', redirect: {name: 'weapons'}},
    {name: 'Weaponsadd', path: '/weapons/add', component: WeaponsAdd},
    {name: 'Weaponsedit', path: '/weapons/edit', component: WeaponsEdit}
  ]
});
