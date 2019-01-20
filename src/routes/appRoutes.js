// @material-ui/icons
import LibraryMusic from '@material-ui/icons/LibraryMusic';
import Person from '@material-ui/icons/Person';
import Search from '@material-ui/icons/Search';
import Explore from '@material-ui/icons/Explore';

// core components/views
import PlayingNow from '../views/PlayingNow';
import ExploreComp from '../views/Explore';
import SearchComp from '../views/Search';
import Profile from '../views/Profile';
import Artist from '../views/Artist';
import Album from '../views/Album';

const appRoutes = [
  {
    path: '/playing',
    showInSidebar: true,
    sidebarName: 'Playing Now',
    navbarName: 'Playing Now',
    icon: LibraryMusic,
    component: PlayingNow
  },
  {
    path: '/explore',
    showInSidebar: true,
    sidebarName: 'Explore',
    navbarName: 'Explore',
    icon: Explore,
    component: ExploreComp
  },
  {
    path: '/search',
    showInSidebar: true,
    sidebarName: 'Search',
    navbarName: 'Search',
    icon: Search,
    component: SearchComp
  },
  {
    path: '/me',
    showInSidebar: true,
    sidebarName: 'Profile',
    navbarName: 'Profile',
    icon: Person,
    component: Profile
  },
  {
    path: '/artist/:id',
    showInSidebar: false,
    sidebarName: 'Artist',
    navbarName: 'Artist',
    component: Artist
  },
  {
    path: '/album/:id',
    showInSidebar: false,
    sidebarName: 'Album',
    navbarName: 'Album',
    component: Album
  },
  {
    redirect: true,
    showInSidebar: false,
    path: '/',
    to: '/playing',
    navbarName: 'Redirect'
  }
];

export default appRoutes;
