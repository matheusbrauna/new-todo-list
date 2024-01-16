import {
  AlarmClock,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  ChevronUp,
  Circle,
  Copy,
  CreditCard,
  Crop,
  DollarSign,
  Download,
  Edit,
  Eye,
  EyeOff,
  FileTerminal,
  Filter,
  Image,
  Loader2,
  LogOut,
  Menu,
  MessageSquare,
  Minus,
  MoreHorizontal,
  MoreVertical,
  Package,
  Plus,
  PlusCircle,
  RefreshCw,
  Search,
  Send,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Sliders,
  SlidersHorizontal,
  Star,
  Trash,
  Twitter,
  UploadCloud,
  User,
  Volume2,
  VolumeX,
  Wallet,
  X,
  type LucideIcon,
  type LucideProps,
  Home,
} from 'lucide-react'

type IconProps = React.HTMLAttributes<SVGElement>

export type Icon = LucideIcon

export const Icons = {
  star: Star,
  twitter: Twitter,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronsLeft: ChevronsLeft,
  chevronsRight: ChevronsRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronUpDown: ChevronsUpDown,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  menu: Menu,
  home: Home,
  verticalThreeDots: MoreVertical,
  horizontalThreeDots: MoreHorizontal,
  verticalSliders: Sliders,
  horizontalSliders: SlidersHorizontal,
  circle: Circle,
  check: Check,
  add: Plus,
  addCircle: PlusCircle,
  remove: Minus,
  view: Eye,
  hide: EyeOff,
  trash: Trash,
  edit: Edit,
  crop: Crop,
  reset: RefreshCw,
  send: Send,
  copy: Copy,
  downlaod: Download,
  warning: AlertTriangle,
  search: Search,
  filter: Filter,
  alarm: AlarmClock,
  calendar: CalendarDays,
  user: User,
  terminal: FileTerminal,
  settings: Settings,
  logout: LogOut,
  volumne: Volume2,
  volumneMute: VolumeX,
  message: MessageSquare,
  billing: CreditCard,
  wallet: Wallet,
  dollarSign: DollarSign,
  cart: ShoppingCart,
  product: Package,
  store: ShoppingBag,
  chart: BarChart3,
  upload: UploadCloud,
  placeholder: Image,
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="currentColor"
      version="1.1"
      viewBox="0 0 512.002 512.002"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M512.002 328.497c0-36.263-19.614-54.003-43.227-63.629a8.474 8.474 0 00-2.36-.928c-15.462-5.896-32.384-8.533-46.521-10.733-6.818-1.058-13.252-2.065-18.825-3.268-4.963-1.068-15.351-5.32-37.022-18.615a8.118 8.118 0 00-2.15-1.326 616.802 616.802 0 01-5.518-3.461 25.543 25.543 0 002.027-10.007c0-6.844-2.671-13.278-7.501-18.099-9.677-9.668-26.539-9.668-36.198 0l-.067.067a1833.986 1833.986 0 01-12.246-8.677c7.187-9.997 6.293-24.039-2.684-33.024-9.677-9.668-26.539-9.668-36.207 0l-2.639 2.638a2763.495 2763.495 0 01-30.112-22.81c-8.32-6.383-20.198-5.615-27.605 1.818l-17.527 17.519c-8.542 8.542-8.542 22.443 0 30.984l4.77 4.77c1.195 1.186 1.075 2.62.964 3.183-.145.751-.572 1.749-1.758 2.253-75.964 32.614-111.386-27.349-112.853-29.901a8.562 8.562 0 00-5.922-4.198c-3.14-.563-7.97-.427-13.201 3.328C31.126 185.434 12.626 301.328 8.889 326.48L.468 351.03a8.475 8.475 0 00.077 5.768c2.014 5.367 13.559 22.895 77.457 22.895l374.793-.017c20.516-1.279 59.24-13.6 59.203-51.079-.001-.033.004-.066.004-.1zm-94.737-58.436c11.069 1.724 21.473 3.567 30.861 6.035a50.911 50.911 0 01-29.991 9.734c-20.767 0-38.76-12.448-46.736-30.449 11.329 6.213 19.961 9.928 26.077 11.24 6.05 1.307 12.723 2.339 19.789 3.44zm-78.426-59.554a8.426 8.426 0 012.5 6.025c0 2.27-.888 4.412-2.5 6.033l-.387.387-.129.129-17.583 17.583c-3.337 3.337-8.747 3.337-12.075 0-3.328-3.328-3.319-8.738 0-12.066l18.108-18.099c3.216-3.235 8.831-3.243 12.066.008zm-57.237-44.143c2.278 0 4.42.887 6.033 2.5 3.328 3.328 3.328 8.738 0 12.066l-18.099 18.099c-3.328 3.337-8.747 3.328-12.075 0-1.613-1.604-2.492-3.746-2.492-6.033a8.5 8.5 0 012.492-6.033l10.41-10.405c.035-.037.073-.07.108-.108l7.59-7.586a8.475 8.475 0 016.033-2.5zm-85.274 46.473c6.11-2.62 10.513-8.124 11.785-14.711a20.57 20.57 0 00-5.658-18.475l-4.762-4.77a4.842 4.842 0 010-6.852l17.527-17.519c1.374-1.382 3.593-1.536 5.129-.35a3024.213 3024.213 0 0028.313 21.472l-3.267 3.266c-4.83 4.83-7.492 11.264-7.492 18.099 0 6.844 2.662 13.269 7.492 18.099 4.992 4.992 11.546 7.484 18.108 7.484 6.554 0 13.107-2.492 18.099-7.484l8.839-8.839c3.952 2.83 7.942 5.664 11.944 8.485l-5.795 5.79c-9.967 9.984-9.967 26.214 0 36.198h.009c4.992 4.992 11.546 7.484 18.108 7.484 6.554 0 13.107-2.492 18.099-7.484l12.806-12.806a650.496 650.496 0 004.86 3.071c4.149 33.942 33.023 59.902 67.664 59.902 18.396 0 35.741-7.335 48.53-20.304 15.271 7.205 25.492 18.326 27.783 37.37H27.155c3.05-19.306 6.614-38.03 10.398-55.178 11.421 8.05 25.123 12.511 39.249 12.511 32.532 0 59.832-22.453 66.621-53.426 15.403.508 33.025-2.497 52.905-11.033zM65.649 181.263c7.833 10.675 27.927 33.45 60.735 40.521-5.666 22.391-25.752 38.447-49.582 38.447-12.973 0-25.479-5.026-34.945-13.893 8.359-33.862 17.238-58.806 23.792-65.075zm386.616 181.364H78.002c-40.201 0-54.963-7.219-59.785-10.752l5.096-14.845h470.461c-6.703 22.967-40.411 25.513-41.509 25.597z"></path>
      <path d="M181.227 299.869l.028.035c.021.024.038.05.059.074.08.092.168.173.252.26.104.11.206.222.315.327.057.054.118.104.176.157.163.148.33.291.505.427l.051.037a8.483 8.483 0 005.169 1.745 8.542 8.542 0 006.262-2.746l45.834-40.109-9.105 31.983a8.526 8.526 0 008.209 10.871 8.524 8.524 0 008.201-6.195l17.033-59.759a8.559 8.559 0 00-3.644-9.557c-3.183-2.022-7.339-1.69-10.189.785L203.93 268.85l9.085-31.873a8.549 8.549 0 00-5.871-10.556c-4.523-1.323-9.25 1.331-10.547 5.871l-16.771 58.88a8.51 8.51 0 001.401 8.697z"></path>
    </svg>
  ),
  nextjs: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="discord"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      ></path>
    </svg>
  ),
  facebook: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  ),
  discord: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
}