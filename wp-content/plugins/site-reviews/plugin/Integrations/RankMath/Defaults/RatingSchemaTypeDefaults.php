<?php

namespace GeminiLabs\SiteReviews\Integrations\RankMath\Defaults;

use GeminiLabs\SiteReviews\Defaults\DefaultsAbstract;

class RatingSchemaTypeDefaults extends DefaultsAbstract
{
    /**
     * All supported schema.org types which can potentially trigger rich results in search.
     *
     * @see https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful
     */
    protected function defaults(): array
    {
        return [
            'AccountingService',
            'AdultEntertainment',
            'Airline',
            'AmpStory',
            'AmusementPark',
            'AnimalShelter',
            'ArchiveOrganization',
            'ArtGallery',
            'Attorney',
            'Audiobook',
            'AudioObject',
            'AudioObjectSnapshot',
            'AutoBodyShop',
            'AutoDealer',
            'AutomatedTeller',
            'AutomotiveBusiness',
            'AutoPartsStore',
            'AutoRental',
            'AutoRepair',
            'AutoWash',
            'Bakery',
            'BankOrCreditUnion',
            'Barcode',
            'BarOrPub',
            'BeautySalon',
            'BedAndBreakfast',
            'BikeStore',
            'Book',
            'BookSeries',
            'BookStore',
            'BowlingAlley',
            'Brewery',
            'BroadcastEvent',
            'BusinessEvent',
            'BusOrCoach',
            'CafeOrCoffeeShop',
            'Campground',
            'Car',
            'Casino',
            'ChildCare',
            'ChildrensEvent',
            'ClothingStore',
            'CollegeOrUniversity',
            'ComedyClub',
            'ComedyEvent',
            'ComicSeries',
            'ComputerStore',
            'Consortium',
            'ConvenienceStore',
            'Corporation',
            'Course',
            'CourseInstance',
            'CovidTestingFacility',
            'CreativeWorkSeason',
            'CreativeWorkSeries',
            'DanceEvent',
            'DanceGroup',
            'DataDownload',
            'DaySpa',
            'DeliveryEvent',
            'Dentist',
            'DepartmentStore',
            'DiagnosticLab',
            'DietarySupplement',
            'Distillery',
            'Drug',
            'DryCleaningOrLaundry',
            'EducationalOrganization',
            'EducationEvent',
            'Electrician',
            'ElectronicsStore',
            'ElementarySchool',
            'EmergencyService',
            'EmploymentAgency',
            'EntertainmentBusiness',
            'Episode',
            'Event',
            'EventSeries',
            'ExerciseGym',
            'ExhibitionEvent',
            'FastFoodRestaurant',
            'Festival',
            'FinancialService',
            'FireStation',
            'Florist',
            'FoodEstablishment',
            'FoodEvent',
            'FundingAgency',
            'FundingScheme',
            'FurnitureStore',
            'Game',
            'GardenStore',
            'GasStation',
            'GeneralContractor',
            'GolfCourse',
            'GovernmentOffice',
            'GovernmentOrganization',
            'GroceryStore',
            'Hackathon',
            'HairSalon',
            'HardwareStore',
            'HealthAndBeautyBusiness',
            'HealthClub',
            'HighSchool',
            'HobbyShop',
            'HomeAndConstructionBusiness',
            'HomeGoodsStore',
            'Hospital',
            'Hostel',
            'Hotel',
            'HousePainter',
            'HowTo',
            'HVACBusiness',
            'IceCreamShop',
            'ImageObject',
            'ImageObjectSnapshot',
            'IndividualProduct',
            'InsuranceAgency',
            'InternetCafe',
            'JewelryStore',
            'LegalService',
            'LegislationObject',
            'Library',
            'LibrarySystem',
            'LiquorStore',
            'LiteraryEvent',
            'LocalBusiness',
            'Locksmith',
            'LodgingBusiness',
            'MediaObject',
            'MedicalBusiness',
            'MedicalClinic',
            'MedicalOrganization',
            'MensClothingStore',
            'MiddleSchool',
            'MobileApplication',
            'MobilePhoneStore',
            'Motel',
            'Motorcycle',
            'MotorcycleDealer',
            'MotorcycleRepair',
            'MotorizedBicycle',
            'Movie',
            'MovieRentalStore',
            'MovieSeries',
            'MovieTheater',
            'MovingCompany',
            'MusicAlbum',
            'MusicEvent',
            'MusicGroup',
            'MusicPlaylist',
            'MusicRecording',
            'MusicRelease',
            'MusicStore',
            'MusicVideoObject',
            'NailSalon',
            'NewsMediaOrganization',
            'Newspaper',
            'NGO',
            'NightClub',
            'Notary',
            'OfficeEquipmentStore',
            'OnDemandEvent',
            'OnlineBusiness',
            'OnlineStore',
            'Optician',
            'Organization',
            'OutletStore',
            'PawnShop',
            'PerformingGroup',
            'Periodical',
            'PetStore',
            'Pharmacy',
            'Physician',
            'Plumber',
            'PodcastEpisode',
            'PodcastSeason',
            'PodcastSeries',
            'PoliceStation',
            'PostOffice',
            'Preschool',
            'Product',
            'ProductCollection',
            'ProductGroup',
            'ProductModel',
            'ProfessionalService',
            'Project',
            'PublicationEvent',
            'PublicSwimmingPool',
            'RadioEpisode',
            'RadioSeason',
            'RadioSeries',
            'RadioStation',
            'RealEstateAgent',
            'Recipe',
            'RecyclingCenter',
            'ResearchOrganization',
            'ResearchProject',
            'Resort',
            'Restaurant',
            'RoofingContractor',
            'SaleEvent',
            'School',
            'ScreeningEvent',
            'SearchRescueOrganization',
            'SelfStorage',
            'ShoeStore',
            'ShoppingCenter',
            'SkiResort',
            'SocialEvent',
            'SoftwareApplication',
            'SportingGoodsStore',
            'SportsActivityLocation',
            'SportsClub',
            'SportsEvent',
            'SportsOrganization',
            'SportsTeam',
            'StadiumOrArena',
            'Store',
            'TattooParlor',
            'TelevisionStation',
            'TennisComplex',
            'TheaterEvent',
            'TheaterGroup',
            'ThreeDimensionalModel',
            'TireShop',
            'TouristInformationCenter',
            'ToyStore',
            'TravelAgency',
            'TVEpisode',
            'TVSeason',
            'TVSeries',
            'Vehicle',
            'VeterinaryCare',
            'VideoGame',
            'VideoGameSeries',
            'VideoObject',
            'VideoObjectSnapshot',
            'VisualArtsEvent',
            'WebApplication',
            'WholesaleStore',
            'Winery',
            'WorkersUnion',
        ];
    }
}
