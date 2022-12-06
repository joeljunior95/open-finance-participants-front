export interface Participant {
    OrganisationId: string;
    OrganisationName: string;
    LegalEntityName: string;
    AuthorisationServers: {
        CustomerFriendlyLogoUri: string;
        CustomerFriendlyName: string;
        OpenIDDiscoveryDocument: string;
    }[];
}
