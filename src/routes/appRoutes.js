// @material-ui/icons
import LibraryMusic from '@material-ui/icons/LibraryMusic';
import Person from '@material-ui/icons/Person';
import Search from '@material-ui/icons/Search';
import Explore from '@material-ui/icons/Explore';

// core components/views
import PlayingNow from '../components/PlayingNow';
import ExploreComp from '../components/Explore';
import SearchComp from '../components/Search';
import Profile from '../components/Profile';

const appRoutes = [
  {
    path: '/playing',
    sidebarName: 'Playing Now',
    navbarName: 'Playing Now',
    icon: LibraryMusic,
    component: PlayingNow
  },
  {
    path: '/explore',
    sidebarName: 'Explore',
    navbarName: 'Explore',
    icon: Explore,
    component: ExploreComp
  },
  {
    path: '/search',
    sidebarName: 'Search',
    navbarName: 'Search',
    icon: Search,
    component: SearchComp
  },
  {
    path: '/me',
    sidebarName: 'Profile',
    navbarName: 'Profile',
    icon: Person,
    component: Profile
  }
  // { redirect: true, path: '/', to: '/playing', navbarName: 'Redirect' }
];

export default appRoutes;