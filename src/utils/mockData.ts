export interface Root {
  statusCode: number
  data: Data
  tid: string
  sid: string
  deviceId: string
  csrfToken: string
}

export interface Data {
  statusMessage: string
  pageOffset: PageOffset
  cards: Card[]
  firstOffsetRequest: boolean
  cacheExpiryTime: number
  nextFetch: number
}

export interface PageOffset {
  nextOffset: string
  widgetOffset: WidgetOffset
}

export interface WidgetOffset {
  NewListingView_category_bar_chicletranking_TwoRows: string
  NewListingView_category_bar_chicletranking_TwoRows_Rendition: string
  Restaurant_Group_WebView_SEO_PB_Theme: string
  collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: string
  inlineFacetFilter: string
  restaurantCountWidget: string
}

export interface Card {
  card: Card2
}

export interface Card2 {
  card: Card3
}

export interface Card3 {
  "@type": string
  header?: Header
  layout?: Layout
  imageGridCards?: ImageGridCards
  id?: string
  gridElements?: GridElements
  title?: string
  sortConfigs?: SortConfig[]
  restaurantCount?: number
  facetList?: FacetList[]
  message?: string
  brands?: Brand[]
  androidAppImage?: string
  androidAppLink?: string
  iosAppImage?: string
  iosAppLink?: string
  cities?: City[]
  citySlug?: string
  lat?: string
  lng?: string
  userAgent?: string
  gandalfRequest?: string
  metaInfo?: MetaInfo
  screenType?: string
  seoParams?: SeoParams
  pageContext?: PageContext
}

export interface Header {
  title: string
  headerStyling: HeaderStyling
  action?: unknown
}

export interface HeaderStyling {
  padding: Padding
}

export interface Padding {
  left: number
  top: number
  bottom: number
}

// export interface Action {}

export interface Layout {
  columns: number
  rows?: number
  horizontalScrollEnabled?: boolean
  itemSpacing?: number
  widgetPadding?: unknown
  containerStyle?: ContainerStyle
  widgetTheme?: WidgetTheme
  scrollBar?: ScrollBar
}

// export interface WidgetPadding {}

export interface ContainerStyle {
  containerPadding: ContainerPadding
}

export interface ContainerPadding {
  left: number
  top?: number
  right: number
  bottom: number
}

export interface WidgetTheme {
  defaultMode: DefaultMode
  darkMode: DarkMode
}

export interface DefaultMode {
  backgroundColour: string
  theme: string
}

export interface DarkMode {
  theme: string
  backgroundColour?: string
}

export interface ScrollBar {
  scrollThumbColor: string
  scrollTrackColor: string
  width: number
  height: number
  scrollStyling: ScrollStyling
}

export interface ScrollStyling {
  padding: Padding2
}

export interface Padding2 {
  top: number
  bottom: number
}

export interface ImageGridCards {
  info: Info[]
  style: Style
}

export interface Info {
  id: string
  imageId: string
  action: Action2
  entityType: string
  accessibility: Accessibility
  entityId: string
  frequencyCapping: unknown
  externalMarketing: unknown
}

export interface Action2 {
  link: string
  text: string
  type: string
}

export interface Accessibility {
  altText: string
  altTextCta: string
}

// export interface FrequencyCapping {}

// export interface ExternalMarketing {}

export interface Style {
  width: Width
  height: Height
}

export interface Width {
  type: string
  value: number
  reference: string
}

export interface Height {
  type: string
  value: number
  reference: string
}

export interface GridElements {
  infoWithStyle: InfoWithStyle
}

export interface InfoWithStyle {
  "@type": string
  restaurants?: Restaurant[]
  theme?: string
  info?: Info3[]
  style?: Style2
  widgetType?: string
  collectionId?: string
}

export interface Restaurant {
  info: Info2
  analytics: Analytics
  cta: Cta
  "@type"?: string
  widgetId?: string
}

export interface Info2 {
  id: string
  name: string
  cloudinaryImageId: string
  locality: string
  areaName: string
  costForTwo: string
  cuisines: string[]
  avgRating: number
  parentId: string
  avgRatingString: string
  totalRatingsString: string
  sla: Sla
  availability: Availability
  badges: Badges
  isOpen: boolean
  type: string
  badgesV2: BadgesV2
  aggregatedDiscountInfoV3?: AggregatedDiscountInfoV3
  differentiatedUi: DifferentiatedUi
  reviewsSummary: unknown
  displayType: string
  restaurantOfferPresentationInfo: unknown
  externalRatings: ExternalRatings
  ratingsDisplayPreference: string
  aggregatedDiscountInfoV2?: unknown
  orderabilityCommunication?: OrderabilityCommunication
  veg?: boolean
}

export interface Sla {
  deliveryTime: number
  lastMileTravel?: number
  serviceability: string
  slaString: string
  lastMileTravelString?: string
  iconType: string
}

export interface Availability {
  nextCloseTime: string
  opened: boolean
}

export interface Badges {
  imageBadges?: ImageBadge[]
}

export interface ImageBadge {
  imageId: string
  description: string
}

export interface BadgesV2 {
  entityBadges: EntityBadges
}

export interface EntityBadges {
  imageBased: ImageBased
  textBased: unknown
  textExtendedBadges: unknown
}

export interface ImageBased {
  badgeObject?: BadgeObject[]
}

export interface BadgeObject {
  attributes: Attributes
}

export interface Attributes {
  description: string
  imageId: string
}

// export interface TextBased {}

// export interface TextExtendedBadges {}

export interface AggregatedDiscountInfoV3 {
  header: string
  subHeader?: string
  discountTag?: string
}

export interface DifferentiatedUi {
  displayType: string
  differentiatedUiMediaDetails: DifferentiatedUiMediaDetails
}

export interface DifferentiatedUiMediaDetails {
  lottie: unknown
  video: unknown
  mediaType?: string
}

// export interface Lottie {}

// export interface Video {}

// export interface ReviewsSummary {}

// export interface RestaurantOfferPresentationInfo {}

export interface ExternalRatings {
  aggregatedRating: AggregatedRating
  source?: string
  sourceIconImageId?: string
}

export interface AggregatedRating {
  rating: string
  ratingCount?: string
}

// export interface AggregatedDiscountInfoV2 {}

export interface OrderabilityCommunication {
  title: unknown
  subTitle: unknown
  message: unknown
  customIcon: unknown
}

// export interface Title {}

// export interface SubTitle {}

// export interface Message {}

// export interface CustomIcon {}

export interface Analytics {
  context: string
}

export interface Cta {
  link: string
  type: string
  text?: string
}

export interface Info3 {
  id: string
  imageId: string
  action: Action3
  entityType: string
  accessibility: Accessibility2
  entityId: string
  frequencyCapping: unknown
  externalMarketing: unknown
}

export interface Action3 {
  link: string
  text: string
  type: string
}

export interface Accessibility2 {
  altText: string
  altTextCta: string
}

// export interface FrequencyCapping2 {}

// export interface ExternalMarketing2 {}

export interface Style2 {
  width: Width2
  height: Height2
  layoutAlignment?: string
}

export interface Width2 {
  type: string
  value: number
  reference: string
}

export interface Height2 {
  type: string
  value: number
  reference: string
}

export interface SortConfig {
  key: string
  title: string
  selected?: boolean
  defaultSelection?: boolean
}

export interface FacetList {
  label: string
  id: string
  selection: string
  facetInfo: FacetInfo[]
  viewType: string
  subLabel?: string
  canSearch?: boolean
  openFilter?: boolean
}

export interface FacetInfo {
  label: string
  id: string
  analytics: unknown
  openFilter?: boolean
}

// export interface Analytics2 {}

export interface Brand {
  text: string
  link: string
}

export interface City {
  text: string
  link: string
}

export interface MetaInfo {
  pageType: string
  pageTitle: string
  pageMetaDescription: string
  pageKeywords: string
}

export interface SeoParams {
  apiName: string
  seoUrl: string
  pageType: string
  businessLine: string
}

export interface PageContext {
  citySlug: string
  cityName: string
  pageType: string
}

