export interface Menu {
  statusCode: number;
  data: Data;
  tid: string;
  sid: string;
  deviceId: string;
  csrfToken: string;
}

export interface Data {
  statusMessage: string;
  cards: Card[];
  firstOffsetRequest: boolean;
  isQCLink: boolean;
}

export interface Card {
  card?: Card2;
  groupedCard?: GroupedCard;
}

export interface Card2 {
  card: Card3;
  relevance?: Relevance;
}

export interface Card3 {
  "@type": string;
  text?: string;
  headerStyling?: HeaderStyling;
  tabs?: Tab[];
  info?: Info;
  analytics?: Analytics;
  layout?: Layout;
  id?: string;
  gridElements?: GridElements;
}

export interface HeaderStyling {
  textColor: string;
  textVariant: string;
}

export interface Tab {
  id: string;
  title: string;
}

export interface Info {
  id: string;
  name: string;
  city: string;
  slugs: Slugs;
  uniqueId: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  costForTwoMessage: string;
  cuisines: string[];
  avgRating: number;
  feeDetails: FeeDetails;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: Sla;
  availability: Availability;
  aggregatedDiscountInfo: AggregatedDiscountInfo;
  badges: Badges;
  slugString: string;
  multiOutlet: boolean;
  isOpen: boolean;
  labels: Label[];
  logo: string;
  totalRatings: number;
  aggregatedDiscountInfoV2: AggregatedDiscountInfoV2;
  type: string;
  nudgeBanners: NudgeBanner[];
  headerBanner: HeaderBanner;
  generalPurposeInfoListV2: GeneralPurposeInfoListV2[];
  ratingSlab: string;
  restaurantCategory: string;
  orderabilityCommunication: OrderabilityCommunication;
  hasBestsellerItems: boolean;
  cartOrderabilityNudgeBanner: CartOrderabilityNudgeBanner;
  latLong: string;
  backgroundImageOverlayInfo: BackgroundImageOverlayInfo;
  featuredSectionInfo: FeaturedSectionInfo;
  requestContexts: string[];
  dishStyle: DishStyle;
}

export interface Slugs {
  restaurant: string;
  city: string;
}

export interface FeeDetails {
  restaurantId: string;
  fees: Fee[];
}

export interface Fee {}

export interface Sla {
  restaurantId: string;
  deliveryTime: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  stressFactor: number;
  rainMode: string;
  longDistance: string;
  zoneId: number;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
}

export interface Availability {
  nextCloseTime: string;
  visibility: boolean;
  opened: boolean;
  restaurantClosedMeta: RestaurantClosedMeta;
}

export interface RestaurantClosedMeta {}

export interface AggregatedDiscountInfo {
  header: string;
  shortDescriptionList: ShortDescriptionList[];
  descriptionList: DescriptionList[];
  visible: boolean;
}

export interface ShortDescriptionList {
  discountType: string;
  operationType: string;
  meta?: string;
}

export interface DescriptionList {
  discountType: string;
  operationType: string;
  meta?: string;
}

export interface Badges {}

export interface Label {
  title: string;
  message: string;
}

export interface AggregatedDiscountInfoV2 {
  header: string;
  shortDescriptionList: ShortDescriptionList2[];
  descriptionList: DescriptionList2[];
  couponDetailsCta: string;
}

export interface ShortDescriptionList2 {
  discountType: string;
  operationType: string;
  meta?: string;
}

export interface DescriptionList2 {
  discountType: string;
  operationType: string;
  meta?: string;
}

export interface NudgeBanner {
  priority: number;
  discountInfo: DiscountInfo;
  unlockedMessage: string;
  minItemCount: number;
  maxItemCount: number;
  type: string;
  nudgeTagInfo: NudgeTagInfo;
  logoCtx: LogoCtx;
  movComputationType: string;
}

export interface DiscountInfo {
  discountType: string;
  value: number;
}

export interface NudgeTagInfo {
  title: string;
  fontName: string;
}

export interface LogoCtx {}

export interface HeaderBanner {
  url: string;
}

export interface GeneralPurposeInfoListV2 {
  cta: Cta;
}

export interface Cta {
  info: Info2;
  linkCta: LinkCta;
}

export interface Info2 {
  recordings: Recordings;
}

export interface Recordings {}

export interface LinkCta {}

export interface OrderabilityCommunication {
  title: Title;
  subTitle: SubTitle;
  message: Message;
  customIcon: CustomIcon;
  commsStyling: CommsStyling;
}

export interface Title {}

export interface SubTitle {}

export interface Message {}

export interface CustomIcon {}

export interface CommsStyling {}

export interface CartOrderabilityNudgeBanner {
  parameters: Parameters;
  presentation: Presentation;
}

export interface Parameters {}

export interface Presentation {}

export interface BackgroundImageOverlayInfo {}

export interface FeaturedSectionInfo {}

export interface DishStyle {
  socialMarkerStyle: SocialMarkerStyle[];
}

export interface SocialMarkerStyle {
  socialMarkerType: string;
  title: string;
  textStyle: string;
  textColor: string;
}

export interface Analytics {}

export interface Layout {
  rows: number;
  columns: number;
  horizontalScrollEnabled: boolean;
  itemSpacing: number;
  lineSpacing: number;
  widgetPadding: WidgetPadding;
  containerStyle: ContainerStyle;
}

export interface WidgetPadding {}

export interface ContainerStyle {
  containerPadding: ContainerPadding;
}

export interface ContainerPadding {
  left: number;
  right: number;
  bottom: number;
}

export interface GridElements {
  infoWithStyle: InfoWithStyle;
}

export interface InfoWithStyle {
  "@type": string;
  offers: Offer[];
  habitMilestoneInfo: HabitMilestoneInfo;
  loyaltyDiscoverPresentationInfo: LoyaltyDiscoverPresentationInfo;
}

export interface Offer {
  info: Info3;
  cta: Cta2;
}

export interface Info3 {
  header: string;
  offerTagColor: string;
  offerIds: string[];
  expiryTime: string;
  couponCode?: string;
  description: string;
  offerType: string;
  restId: string;
  offerLogo: string;
  descriptionTextColor: string;
  primaryDescription?: string;
  offerTag?: string;
}

export interface Cta2 {
  type: string;
}

export interface HabitMilestoneInfo {
  callout: Callout;
}

export interface Callout {}

export interface LoyaltyDiscoverPresentationInfo {
  logoCtx: LogoCtx2;
}

export interface LogoCtx2 {}

export interface Relevance {
  type: string;
  sectionId: string;
}

export interface GroupedCard {
  cardGroupMap: CardGroupMap;
}

export interface CardGroupMap {
  REGULAR: Regular;
}

export interface Regular {
  cards: Card4[];
}

export interface Card4 {
  card: Card5;
}

export interface Card5 {
  card: Card6;
  relevance?: Relevance2;
}

export interface Card6 {
  "@type": string;
  badges?: Badges2;
  vegOnlyDetails?: VegOnlyDetails;
  offersFilter?: OffersFilter;
  topRatedFilter?: TopRatedFilter;
  kidsCategoryFilter?: KidsCategoryFilter;
  vegFilter?: VegFilter;
  nonvegFilter?: NonvegFilter;
  title?: string;
  carousel?: Carousel[];
  itemCards?: ItemCard[];
  type?: string;
  subtitleSuffix?: SubtitleSuffix;
  categoryId?: string;
  image?: string;
  categories?: Category[];
  imageId?: string;
  text?: string[];
  name?: string;
  area?: string;
  completeAddress?: string;
}

export interface Badges2 {}

export interface VegOnlyDetails {
  imageId: string;
  title: string;
  description: string;
}

export interface OffersFilter {
  attributes: Attributes;
}

export interface Attributes {
  displayText: string;
}

export interface TopRatedFilter {
  attributes: Attributes2;
}

export interface Attributes2 {
  displayText: string;
}

export interface KidsCategoryFilter {
  attributes: Attributes3;
}

export interface Attributes3 {
  displayText: string;
  tooltip: Tooltip;
}

export interface Tooltip {
  enabled: boolean;
  displayText: string;
}

export interface VegFilter {
  attributes: Attributes4;
}

export interface Attributes4 {
  displayText: string;
}

export interface NonvegFilter {
  attributes: Attributes5;
}

export interface Attributes5 {
  displayText: string;
}

export interface Carousel {
  type: string;
  subtype: string;
  bannerId: string;
  creativeId: string;
  title: string;
  description: string;
  fontColor: string;
  dish: Dish;
}

export interface Dish {
  info: Info4;
  analytics: Analytics2;
  restaurant: Restaurant;
  hideRestaurantDetails: boolean;
}

export interface Info4 {
  id: string;
  name: string;
  category: string;
  description: string;
  imageId: string;
  inStock: number;
  isVeg?: number;
  variants: Variants;
  variantsV2: VariantsV2;
  addons: Addon[];
  itemAttribute: ItemAttribute;
  defaultPrice: number;
  ribbon: Ribbon;
  itemBadge: ItemBadge;
  badgesV2: BadgesV2;
  itemPriceStrikeOff: boolean;
  parentId: string;
}

export interface Variants {}

export interface VariantsV2 {
  variantGroups: VariantGroup[];
  pricingModels: PricingModel[];
}

export interface VariantGroup {
  groupId: string;
  name: string;
  variations: Variation[];
}

export interface Variation {
  name: string;
  price: number;
  default?: number;
  id: string;
  inStock: number;
  isVeg?: number;
  isEnabled: number;
}

export interface PricingModel {
  variations: Variation2[];
  price: number;
  addonCombinations: AddonCombination[];
}

export interface Variation2 {
  groupId: string;
  variationId: string;
}

export interface AddonCombination {
  groupId: string;
  addonId: string;
}

export interface Addon {
  groupId: string;
  groupName: string;
  choices: Choice[];
  maxAddons: number;
  maxFreeAddons: number;
}

export interface Choice {
  id: string;
  name: string;
  price: number;
  inStock?: number;
  isVeg?: number;
  isEnabled: number;
}

export interface ItemAttribute {
  vegClassifier: string;
  portionSize?: string;
}

export interface Ribbon {}

export interface ItemBadge {}

export interface BadgesV2 {}

export interface Analytics2 {}

export interface Restaurant {
  info: Info5;
}

export interface Info5 {
  dishStyle: DishStyle2;
}

export interface DishStyle2 {
  socialMarkerStyle: SocialMarkerStyle2[];
}

export interface SocialMarkerStyle2 {
  socialMarkerType: string;
  title: string;
  textStyle: string;
  textColor: string;
}

export interface ItemCard {
  card: Card7;
}

export interface Card7 {
  "@type": string;
  info: Info6;
  analytics: Analytics3;
  hideRestaurantDetails: boolean;
}

export interface Info6 {
  id: string;
  name: string;
  category: string;
  description?: string;
  imageId: string;
  inStock: number;
  isVeg?: number;
  variants: Variants2;
  variantsV2: VariantsV22;
  addons?: Addon2[];
  itemAttribute: ItemAttribute2;
  defaultPrice?: number;
  ribbon: Ribbon2;
  showImage?: boolean;
  itemBadge: ItemBadge2;
  badgesV2: BadgesV22;
  ratings: Ratings;
  itemPriceStrikeOff: boolean;
  parentId: string;
  isBestseller?: boolean;
  price?: number;
  type?: string;
  imageBadges?: ImageBadge[];
  isGuiltfree?: boolean;
  finalPrice?: number;
  offerTags?: OfferTag[];
  itemNudgeType?: string;
  offerIds?: string[];
  itemLevelDiscount?: string;
  cartContext?: string;
  isNinetyninestoreItem?: boolean;
}

export interface Variants2 {}

export interface VariantsV22 {
  variantGroups?: VariantGroup2[];
  pricingModels?: PricingModel2[];
}

export interface VariantGroup2 {
  groupId: string;
  name: string;
  variations: Variation3[];
}

export interface Variation3 {
  name: string;
  price?: number;
  default?: number;
  id: string;
  inStock: number;
  isVeg?: number;
  isEnabled: number;
  dependantVariation?: DependantVariation;
}

export interface DependantVariation {
  groupId: string;
  variationId: string;
}

export interface PricingModel2 {
  variations: Variation4[];
  price: number;
  addonCombinations: AddonCombination2[];
}

export interface Variation4 {
  groupId: string;
  variationId: string;
}

export interface AddonCombination2 {
  groupId: string;
  addonId: string;
}

export interface Addon2 {
  groupId: string;
  groupName: string;
  choices: Choice2[];
  maxAddons: number;
  maxFreeAddons: number;
}

export interface Choice2 {
  id: string;
  name: string;
  price: number;
  inStock?: number;
  isVeg?: number;
  isEnabled: number;
}

export interface ItemAttribute2 {
  vegClassifier: string;
  portionSize?: string;
}

export interface Ribbon2 {
  text?: string;
  textColor?: string;
  topBackgroundColor?: string;
  bottomBackgroundColor?: string;
}

export interface ItemBadge2 {}

export interface BadgesV22 {}

export interface Ratings {
  aggregatedRating: AggregatedRating;
  ratingsPresentationConfig?: RatingsPresentationConfig;
}

export interface AggregatedRating {
  rating?: string;
  ratingCount?: string;
  ratingCountV2?: string;
}

export interface RatingsPresentationConfig {
  bgGradient: BgGradient;
  ratingIconColor: string;
  ratingTextColor: string;
  ratingCountTextColor: string;
  ratingFontName: string;
  ratingCountFontName: string;
}

export interface BgGradient {
  colours: string[];
  gradientDirection: string;
}

export interface ImageBadge {
  imageId: string;
}

export interface OfferTag {
  matchText: string;
  title?: string;
  textColor?: string;
  backgroundColor?: string;
}

export interface Analytics3 {}

export interface SubtitleSuffix {}

export interface Category {
  title: string;
  itemCards: ItemCard2[];
  subtitleSuffix: SubtitleSuffix2;
  categoryId: string;
}

export interface ItemCard2 {
  card: Card8;
}

export interface Card8 {
  "@type": string;
  info: Info7;
  analytics: Analytics4;
  hideRestaurantDetails: boolean;
}

export interface Info7 {
  id: string;
  name: string;
  category: string;
  description: string;
  imageId: string;
  inStock: number;
  variants: Variants3;
  variantsV2: VariantsV23;
  addons: Addon3[];
  itemAttribute: ItemAttribute3;
  defaultPrice: number;
  ribbon: Ribbon3;
  type: string;
  itemBadge: ItemBadge3;
  badgesV2: BadgesV23;
  ratings: Ratings2;
  itemPriceStrikeOff: boolean;
  parentId: string;
  isVeg?: number;
  isBestseller?: boolean;
  price: number;
}

export interface Variants3 {}

export interface VariantsV23 {
  variantGroups: VariantGroup3[];
  pricingModels: PricingModel3[];
}

export interface VariantGroup3 {
  groupId: string;
  name: string;
  variations: Variation5[];
}

export interface Variation5 {
  name: string;
  price: number;
  default?: number;
  id: string;
  inStock: number;
  isVeg?: number;
  isEnabled: number;
}

export interface PricingModel3 {
  variations: Variation6[];
  price: number;
  addonCombinations: AddonCombination3[];
}

export interface Variation6 {
  groupId: string;
  variationId: string;
}

export interface AddonCombination3 {
  groupId: string;
  addonId: string;
}

export interface Addon3 {
  groupId: string;
  groupName: string;
  choices: Choice3[];
  maxAddons: number;
  maxFreeAddons: number;
}

export interface Choice3 {
  id: string;
  name: string;
  price: number;
  inStock?: number;
  isVeg?: number;
  isEnabled: number;
}

export interface ItemAttribute3 {
  vegClassifier: string;
  portionSize?: string;
}

export interface Ribbon3 {
  text?: string;
  textColor?: string;
  topBackgroundColor?: string;
  bottomBackgroundColor?: string;
}

export interface ItemBadge3 {}

export interface BadgesV23 {}

export interface Ratings2 {
  aggregatedRating: AggregatedRating2;
  ratingsPresentationConfig?: RatingsPresentationConfig2;
}

export interface AggregatedRating2 {
  rating?: string;
  ratingCount?: string;
  ratingCountV2?: string;
}

export interface RatingsPresentationConfig2 {
  bgGradient: BgGradient2;
  ratingIconColor: string;
  ratingTextColor: string;
  ratingCountTextColor: string;
  ratingFontName: string;
  ratingCountFontName: string;
}

export interface BgGradient2 {
  colours: string[];
  gradientDirection: string;
}

export interface Analytics4 {}

export interface SubtitleSuffix2 {}

export interface Relevance2 {
  type: string;
  sectionId: string;
}
