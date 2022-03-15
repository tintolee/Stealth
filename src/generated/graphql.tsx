import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  active?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  expireAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  scopes: Array<Scalars['String']>;
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AccessTokenFilterInput = {
  _AND?: InputMaybe<Array<FilterAccessTokenInput>>;
  _NOR?: InputMaybe<Array<FilterAccessTokenInput>>;
  _OR?: InputMaybe<Array<FilterAccessTokenInput>>;
  active?: InputMaybe<BooleanComparisonFilter>;
  createdAt?: InputMaybe<DateComparisonFilter>;
  id?: InputMaybe<StringComparisonFilter>;
  tenantId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<DateComparisonFilter>;
};

export type AccessTokenMutations = {
  __typename?: 'AccessTokenMutations';
  create: AccessToken;
  delete: AccessToken;
};


export type AccessTokenMutationsCreateArgs = {
  input: CreateAccessTokenInput;
};


export type AccessTokenMutationsDeleteArgs = {
  input: DeleteAccessTokenInput;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  tokens: Tokens;
  user: User;
};

export type AccountMutations = {
  __typename?: 'AccountMutations';
  changePassword: BooleanPayload;
  login: Account;
  logout: BooleanPayload;
  refreshTokens: Account;
  register: AccountRegisterResponse;
  sendResetPasswordEmail: BooleanPayload;
  sendVerificationEmail: BooleanPayload;
  subscribePushNotificationToken: RegisterPushNotificationResponse;
  unSubscribePushNotificationToken: UnRegisterPushNotificationTokenResponse;
  verifyAccount: BooleanPayload;
  verifyExpireToken: ExpirableTokens;
  verifyPaswwordResetCode: BooleanPayload;
};


export type AccountMutationsChangePasswordArgs = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  newPassword: Scalars['String'];
};


export type AccountMutationsLoginArgs = {
  input: LoginInput;
};


export type AccountMutationsRefreshTokensArgs = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};


export type AccountMutationsRegisterArgs = {
  input: RegisterInput;
};


export type AccountMutationsSendResetPasswordEmailArgs = {
  email: Scalars['String'];
};


export type AccountMutationsSendVerificationEmailArgs = {
  email: Scalars['String'];
};


export type AccountMutationsSubscribePushNotificationTokenArgs = {
  input: RegisterPushNotificationInput;
};


export type AccountMutationsUnSubscribePushNotificationTokenArgs = {
  input: UnRegisterPushNotificationInput;
};


export type AccountMutationsVerifyAccountArgs = {
  email: Scalars['String'];
  pincode: Scalars['String'];
};


export type AccountMutationsVerifyExpireTokenArgs = {
  token: Scalars['Float'];
};


export type AccountMutationsVerifyPaswwordResetCodeArgs = {
  email: Scalars['String'];
  pinCode: Scalars['String'];
};

export type AccountRegisterResponse = {
  __typename?: 'AccountRegisterResponse';
  activationLink: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  line?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  line?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type Amenities = {
  bathrooms?: InputMaybe<Scalars['Int']>;
  bedrooms?: InputMaybe<Scalars['Int']>;
  others?: InputMaybe<Scalars['String']>;
  parking?: InputMaybe<Scalars['Boolean']>;
  toilets?: InputMaybe<Scalars['Int']>;
};

export type AmenitiesResponse = {
  __typename?: 'AmenitiesResponse';
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  others?: Maybe<Scalars['String']>;
  parkingSpace?: Maybe<Scalars['Boolean']>;
  toilets?: Maybe<Scalars['Float']>;
};

/** The App roles for authorization */
export enum AppRole {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Developer = 'DEVELOPER',
  Guest = 'GUEST',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type Applicant = {
  __typename?: 'Applicant';
  currentAddress?: Maybe<Address>;
  dateOfBirth?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employmentHistory?: Maybe<EmploymentHistory>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  identificationNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  rentalHistory?: Maybe<RentalHistory>;
};

export type ApplicantFilterInput = {
  currentAddress?: InputMaybe<AddressInput>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  employmentHistory?: InputMaybe<EmploymentHistoryInput>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  identificationNumber?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  rentalHistory?: InputMaybe<RentalHistoryInput>;
};

export type Application = {
  __typename?: 'Application';
  applicant?: Maybe<Scalars['String']>;
  applicantAggregate?: Maybe<Applicant>;
  applicationStatus?: Maybe<ApplicationStausEnum>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  rental?: Maybe<Scalars['String']>;
  terms?: Maybe<ApplicationTerms>;
  unit?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ApplicationEmergencyContact = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  relationship: Scalars['String'];
};

export type ApplicationFilterInput = {
  currentAddress?: InputMaybe<AddressInput>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  emergencyContact?: InputMaybe<ApplicationEmergencyContact>;
  employmentHistory?: InputMaybe<EmploymentHistoryInput>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  rental?: InputMaybe<Scalars['String']>;
  rentalHistory?: InputMaybe<RentalHistoryInput>;
  terms?: InputMaybe<ApplicationTermsInput>;
  unit?: InputMaybe<Scalars['String']>;
};

export type ApplicationForm = {
  __typename?: 'ApplicationForm';
  template?: Maybe<Array<FormTemplate>>;
  title?: Maybe<Scalars['String']>;
};

/** Specifies the  Application status */
export enum ApplicationStausEnum {
  Approved = 'APPROVED',
  Canceled = 'CANCELED',
  Declined = 'DECLINED',
  Deffered = 'DEFFERED',
  Pending = 'PENDING'
}

export type ApplicationTerms = {
  __typename?: 'ApplicationTerms';
  agreed?: Maybe<Scalars['Boolean']>;
  agreedBy?: Maybe<Scalars['String']>;
};

export type ApplicationTermsInput = {
  agreed?: InputMaybe<Scalars['Boolean']>;
  agreedBy?: InputMaybe<Scalars['String']>;
};

export type AuthApiKey = WebhookAuthType & {
  __typename?: 'AuthApiKey';
  addTo: WebhookApiKeyFieldEnum;
  key: Scalars['String'];
  type: WebhookAuthEnum;
  value: Scalars['String'];
};

export type AuthApiKeyInput = {
  addTo: WebhookApiKeyFieldEnum;
  key: Scalars['String'];
  type: WebhookAuthEnum;
  value: Scalars['String'];
};

export type AuthBasic = WebhookAuthType & {
  __typename?: 'AuthBasic';
  password: Scalars['String'];
  type: WebhookAuthEnum;
  username: Scalars['String'];
};

export type AuthBasicInput = {
  password: Scalars['String'];
  type: WebhookAuthEnum;
  username: Scalars['String'];
};

export type AuthNone = WebhookAuthType & {
  __typename?: 'AuthNone';
  type: WebhookAuthEnum;
};

export type AuthNoneInput = {
  type: WebhookAuthEnum;
};

export type AuthOAuth2 = WebhookAuthType & {
  __typename?: 'AuthOAuth2';
  addTo: WebhookApiKeyFieldEnum;
  token: Scalars['String'];
  type: WebhookAuthEnum;
};

export type AuthOAuth2Input = {
  addTo: WebhookApiKeyFieldEnum;
  token: Scalars['String'];
  type: WebhookAuthEnum;
};

export type AuthToken = WebhookAuthType & {
  __typename?: 'AuthToken';
  token: Scalars['String'];
  type: WebhookAuthEnum;
};

export type AuthTokenInput = {
  token: Scalars['String'];
  type: WebhookAuthEnum;
};

export type AuthTypeUnion = AuthApiKey | AuthBasic | AuthNone | AuthOAuth2 | AuthToken;

export type Billing = {
  __typename?: 'Billing';
  invoice?: Maybe<Invoice>;
  invoices?: Maybe<Array<Invoice>>;
  subscription?: Maybe<RentalSubscription>;
  subscriptions?: Maybe<Array<RentalSubscription>>;
};


export type BillingInvoiceArgs = {
  id: Scalars['String'];
};


export type BillingSubscriptionArgs = {
  id: Scalars['String'];
  tenantId: Scalars['String'];
};


export type BillingSubscriptionsArgs = {
  tenantId: Scalars['String'];
};

export type BillingMutations = {
  __typename?: 'BillingMutations';
  cancelSubscription: RentalSubscription;
  changeSubscription: RentalSubscription;
};


export type BillingMutationsChangeSubscriptionArgs = {
  input: ChangeSubscriptionInput;
};

export type BillingResponse = {
  __typename?: 'BillingResponse';
  billingAccount?: Maybe<Scalars['String']>;
  paymentPlan?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type BooleanComparisonFilter = {
  _EQ?: InputMaybe<Scalars['Boolean']>;
  _NE?: InputMaybe<Scalars['Boolean']>;
};

export type BooleanPayload = {
  __typename?: 'BooleanPayload';
  success: Scalars['Boolean'];
};

export type ChangeSubscriptionInput = {
  couponId?: InputMaybe<Scalars['String']>;
  planId: Scalars['String'];
};

export type ContactInformationInput = {
  address?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  normalizedAddress?: InputMaybe<Scalars['String']>;
  normalizedEmail?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateAccessTokenInput = {
  expireAt?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  scopes?: InputMaybe<Array<Scalars['String']>>;
  tenantId?: InputMaybe<Scalars['String']>;
};

export type CreateApplicationInput = {
  currentAddress?: InputMaybe<AddressInput>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  emergencyContact: ApplicationEmergencyContact;
  employmentHistory: EmploymentHistoryInput;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  rental: Scalars['String'];
  rentalHistory: RentalHistoryInput;
  terms: ApplicationTermsInput;
  unit: Scalars['String'];
};

export type CreateFormFieldInput = {
  dataType: FieldDataType;
  description?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  label: Scalars['String'];
};

export type CreateFormTemplateInput = {
  fieldIds: Array<Scalars['String']>;
  name: Scalars['String'];
  postfixText?: InputMaybe<Scalars['String']>;
  prefixText?: InputMaybe<Scalars['String']>;
  repeatable?: InputMaybe<Scalars['Boolean']>;
  tag?: InputMaybe<Scalars['String']>;
};

export type CreateLeaseInput = {
  leaseDetails?: InputMaybe<LeaseDetailsInput>;
  leaseType?: InputMaybe<LeaseTypeInput>;
  rent?: InputMaybe<RentInput>;
  signatureStatus: LeaseSignature;
  tenant: RentalTenantInput;
};

export type CreateRentalInput = {
  address: AddressInput;
  name: Scalars['String'];
  rentalType: Scalars['String'];
};

export type CreateRentalTenantResponse = {
  __typename?: 'CreateRentalTenantResponse';
  contactInformation?: Maybe<TenantContactInformation>;
  emergencyContact?: Maybe<EmergencyContactType>;
  id: Scalars['String'];
  personalInformation?: Maybe<PersonalInformation>;
};

export type CreateRentalTypeInput = {
  category: RentalTypeCategories;
  description?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
  name: Scalars['String'];
};

export type CreateTenantInput = {
  cardId?: InputMaybe<Scalars['String']>;
  couponId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  planId: Scalars['String'];
};

export type CreateWebhookInput = {
  action?: InputMaybe<Array<WebhookCrudEnum>>;
  auth: WebhookAuthTypesInput;
  endpoint: Scalars['String'];
  name: Scalars['String'];
  requestType: WebhookHttpVerbEnum;
};

export type DateComparisonFilter = {
  _EQ?: InputMaybe<Scalars['DateTime']>;
  _GT?: InputMaybe<Scalars['DateTime']>;
  _GTE?: InputMaybe<Scalars['DateTime']>;
  _LT?: InputMaybe<Scalars['DateTime']>;
  _LTE?: InputMaybe<Scalars['DateTime']>;
  _NE?: InputMaybe<Scalars['DateTime']>;
};

export type DeleteAccessTokenInput = {
  id: Scalars['ID'];
  tenantId?: InputMaybe<Scalars['String']>;
};

export type DeleteApplicantInput = {
  id: Scalars['String'];
};

export type DeleteApplicationInput = {
  id: Scalars['String'];
};

export type DeleteFormTemplateInput = {
  id: Scalars['ID'];
};

export type DeleteLeaseInput = {
  id: Scalars['ID'];
};

export type DeleteMemberInput = {
  id: Scalars['ID'];
  tenantId: Scalars['String'];
};

export type DeleteRentalInput = {
  id: Scalars['ID'];
};

export type DeleteRentalTenantInput = {
  id: Scalars['ID'];
};

export type DeleteRentalTenantResponse = {
  __typename?: 'DeleteRentalTenantResponse';
  id: Scalars['String'];
};

export type DeleteRentalTypeInput = {
  id: Scalars['String'];
};

export type DeleteTenantInput = {
  id: Scalars['ID'];
};

export type DeleteWebhookInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DocumentMutations = {
  __typename?: 'DocumentMutations';
  create: RentalImage;
};


export type DocumentMutationsCreateArgs = {
  file: Scalars['Upload'];
  id: Scalars['String'];
};

export type EmailObject = {
  __typename?: 'EmailObject';
  address: Scalars['String'];
  primary: Scalars['Boolean'];
  verified: Scalars['Boolean'];
};

export type EmergencyContact = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  relationship: Scalars['String'];
};

export type EmergencyContactType = {
  __typename?: 'EmergencyContactType';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
};

export type EmploymentHistory = {
  __typename?: 'EmploymentHistory';
  employerName?: Maybe<Scalars['String']>;
  positionHeld?: Maybe<Scalars['String']>;
};

export type EmploymentHistoryInput = {
  employerName?: InputMaybe<Scalars['String']>;
  positionHeld?: InputMaybe<Scalars['String']>;
};

export type ExpirableTokens = {
  __typename?: 'ExpirableTokens';
  iat?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Enum type for form fields */
export enum FieldDataType {
  FieldDataTypeAttachment = 'FieldDataType_ATTACHMENT',
  FieldDataTypeAddress = 'FieldDataType_Address',
  FieldDataTypeBoolean = 'FieldDataType_BOOLEAN',
  FieldDataTypeCheckbox = 'FieldDataType_CHECKBOX',
  FieldDataTypeCurrency = 'FieldDataType_Currency',
  FieldDataTypeDatetime = 'FieldDataType_DATETIME',
  FieldDataTypeDateRange = 'FieldDataType_DateRange',
  FieldDataTypeEmail = 'FieldDataType_Email',
  FieldDataTypeNumber = 'FieldDataType_NUMBER',
  FieldDataTypeRadiobutton = 'FieldDataType_RADIOBUTTON',
  FieldDataTypeString = 'FieldDataType_STRING'
}

export type FilterAccessTokenInput = {
  _AND?: InputMaybe<Array<FilterAccessTokenInput>>;
  _NOR?: InputMaybe<Array<FilterAccessTokenInput>>;
  _OR?: InputMaybe<Array<FilterAccessTokenInput>>;
  active?: InputMaybe<BooleanComparisonFilter>;
  createdAt?: InputMaybe<DateComparisonFilter>;
  id?: InputMaybe<StringComparisonFilter>;
  updatedAt?: InputMaybe<DateComparisonFilter>;
};

export type FilterWebhookInput = {
  _AND?: InputMaybe<Array<FilterWebhookInput>>;
  _NOR?: InputMaybe<Array<FilterWebhookInput>>;
  _OR?: InputMaybe<Array<FilterWebhookInput>>;
  active?: InputMaybe<BooleanComparisonFilter>;
  createdAt?: InputMaybe<DateComparisonFilter>;
  endpoint?: InputMaybe<StringComparisonFilter>;
  id?: InputMaybe<StringComparisonFilter>;
  name?: InputMaybe<StringComparisonFilter>;
  updatedAt?: InputMaybe<DateComparisonFilter>;
};

export type FormField = {
  __typename?: 'FormField';
  dataType: FieldDataType;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
};

export type FormFieldInput = {
  dataType?: InputMaybe<FieldDataType>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  label?: InputMaybe<Scalars['String']>;
};

export type FormFieldQueryInput = {
  dataType?: InputMaybe<FieldDataType>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FormTemplate = {
  __typename?: 'FormTemplate';
  formFields?: Maybe<Array<FormField>>;
  id: Scalars['String'];
  name: Scalars['String'];
  postfixText: Scalars['String'];
  prefixText: Scalars['String'];
  repeatable: Scalars['Boolean'];
  tag: Scalars['String'];
};

export type FormTemplateFilterInput = {
  fieldIds?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  postfixText?: InputMaybe<Scalars['String']>;
  prefixText?: InputMaybe<Scalars['String']>;
  repeatable?: InputMaybe<Scalars['Boolean']>;
  tag?: InputMaybe<Scalars['String']>;
};

/** The tenant member invitation status */
export enum InvitationStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type InviteMemberInput = {
  email?: InputMaybe<Scalars['String']>;
  role: AppRole;
  userId?: InputMaybe<Scalars['ID']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  accountCountry?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  billingReason?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  customerEmail?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  endingBalance?: Maybe<Scalars['Float']>;
  hostedInvoiceUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invoicePdf?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  receiptNumber?: Maybe<Scalars['String']>;
  startingBalance?: Maybe<Scalars['Float']>;
  statementDescriptor?: Maybe<Scalars['String']>;
  status?: Maybe<InvoiceStatus>;
  subtotal?: Maybe<Scalars['Int']>;
  tax?: Maybe<Scalars['Float']>;
  taxPercent?: Maybe<Scalars['Float']>;
  total: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

/** Invoice status enum */
export enum InvoiceStatus {
  Draft = 'DRAFT',
  Open = 'OPEN',
  Paid = 'PAID',
  Uncollectible = 'UNCOLLECTIBLE',
  Void = 'VOID'
}

export type Landlord = {
  __typename?: 'Landlord';
  Phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type LandlordInput = {
  Phone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type Lease = {
  __typename?: 'Lease';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  leaseDetails?: Maybe<LeaseDetails>;
  rent?: Maybe<Rent>;
  signatureStatus?: Maybe<LeaseSignature>;
  tenant?: Maybe<Scalars['String']>;
  tenantAggregate?: Maybe<RentalTenant>;
  transactions: Array<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type LeaseDetails = {
  __typename?: 'LeaseDetails';
  endDate?: Maybe<Scalars['DateTime']>;
  leaseType?: Maybe<LeaseType>;
  rental?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  unit?: Maybe<Scalars['String']>;
};

export type LeaseDetailsInput = {
  endDate: Scalars['DateTime'];
  leaseType?: InputMaybe<LeaseType>;
  rental: Scalars['String'];
  startDate: Scalars['DateTime'];
  unit: Scalars['String'];
};

export type LeaseFilterInput = {
  id?: InputMaybe<Scalars['String']>;
  leaseDetails?: InputMaybe<LeaseDetailsInput>;
  leaseType?: InputMaybe<LeaseTypeInput>;
  rent?: InputMaybe<RentInput>;
  signatureStatus?: InputMaybe<LeaseSignature>;
  tenant?: InputMaybe<Scalars['String']>;
};

export type LeaseInput = {
  id: Scalars['String'];
  leaseDetails: LeaseDetailsInput;
  rent: RentInput;
  signatureStatus: LeaseSignature;
  tenant?: InputMaybe<Scalars['String']>;
  transactions?: InputMaybe<Array<Scalars['String']>>;
};

/** Status of lease signature */
export enum LeaseSignature {
  Signed = 'SIGNED',
  Unsigned = 'UNSIGNED'
}

/** The tenants lease type */
export enum LeaseType {
  Fixed = 'FIXED',
  Fixedwithrollover = 'FIXEDWITHROLLOVER',
  Monthtomonth = 'MONTHTOMONTH'
}

/** Value for status of tenant lease */
export enum LeaseTypeInput {
  Fixed = 'FIXED',
  Fixedwithrollover = 'FIXEDWITHROLLOVER',
  Monthtomonth = 'MONTHTOMONTH'
}

export type LoginInput = {
  params: LoginParamsInput;
  service: ServiceTypes;
};

export type LoginParamsInput = {
  /** Access token for social (Service: Twitter, Github, Email) */
  accessToken?: InputMaybe<Scalars['String']>;
  /** Access token for social (Service: Twitter, Github, Email) */
  accessTokenSecret?: InputMaybe<Scalars['String']>;
  /** Primary email of the user (Service: Password) */
  email?: InputMaybe<Scalars['String']>;
  /** User password (Service: Password) */
  password?: InputMaybe<Scalars['String']>;
};

export type Member = {
  __typename?: 'Member';
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  role: AppRole;
  status: InvitationStatus;
  tenant: Tenant;
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['String']>;
};

export type MemberFilterInput = {
  role?: InputMaybe<AppRole>;
  status?: InputMaybe<InvitationStatus>;
  tenantId?: InputMaybe<Scalars['String']>;
};

export type MemberMutations = {
  __typename?: 'MemberMutations';
  delete: Member;
  invite: Member;
  update: Member;
};


export type MemberMutationsDeleteArgs = {
  input: DeleteMemberInput;
};


export type MemberMutationsInviteArgs = {
  input: InviteMemberInput;
};


export type MemberMutationsUpdateArgs = {
  input: UpdateMemberInput;
};

export type MoveInInput = {
  application: Scalars['ID'];
  lease: MoveInLeaseInput;
};

export type MoveInLeaseInput = {
  leaseDetails?: InputMaybe<LeaseDetailsInput>;
  leaseType?: InputMaybe<LeaseTypeInput>;
  rent?: InputMaybe<RentInput>;
  signatureStatus: LeaseSignature;
};

export type MoveInResponse = {
  __typename?: 'MoveInResponse';
  lease?: Maybe<Lease>;
  tenant?: Maybe<RentalTenant>;
};

export type MqttConfig = {
  __typename?: 'MqttConfig';
  password: Scalars['String'];
  port?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type MqttConfigInput = {
  password: Scalars['String'];
  port?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accessToken?: Maybe<AccessTokenMutations>;
  account?: Maybe<AccountMutations>;
  billing?: Maybe<BillingMutations>;
  document?: Maybe<DocumentMutations>;
  member?: Maybe<MemberMutations>;
  profile?: Maybe<ProfileMutations>;
  rental?: Maybe<RentalMutations>;
  tenant?: Maybe<TenantMutations>;
  webhook?: Maybe<WebhookMutations>;
};

export type Occupant = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type OccupantResponse = {
  __typename?: 'OccupantResponse';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PersonalInformation = {
  __typename?: 'PersonalInformation';
  comments?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  identificationNumber?: Maybe<Scalars['String']>;
};

export type PersonalInformationInput = {
  comments?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  identificationNumber?: InputMaybe<Scalars['String']>;
};

export type ProfileMutations = {
  __typename?: 'ProfileMutations';
  update: User;
};


export type ProfileMutationsUpdateArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  accessToken?: Maybe<AccessToken>;
  accessTokens?: Maybe<Array<AccessToken>>;
  applicant: Applicant;
  applicants: Array<Applicant>;
  application: Application;
  applications: Array<Application>;
  billing?: Maybe<Billing>;
  formField?: Maybe<FormField>;
  formFields?: Maybe<Array<FormField>>;
  formTemplate?: Maybe<FormTemplate>;
  formTemplates?: Maybe<Array<FormTemplate>>;
  lease: Lease;
  leases: Array<Lease>;
  member: Member;
  members?: Maybe<Array<Member>>;
  profile: User;
  rental?: Maybe<Rental>;
  rentalAvailable?: Maybe<Scalars['Boolean']>;
  rentalType?: Maybe<RentalType>;
  rentalTypes?: Maybe<Array<RentalType>>;
  rentals?: Maybe<Array<Rental>>;
  role: Role;
  roles: Array<Role>;
  tenant?: Maybe<RentalTenant>;
  tenantAvailable?: Maybe<Scalars['Boolean']>;
  tenants?: Maybe<Array<RentalTenant>>;
  uploads?: Maybe<Scalars['Boolean']>;
  webhook?: Maybe<Webhook>;
  webhooks?: Maybe<Array<Webhook>>;
};


export type QueryAccessTokenArgs = {
  input: ReadAccessTokenInput;
};


export type QueryAccessTokensArgs = {
  paginate?: InputMaybe<PaginationInput>;
  where?: InputMaybe<AccessTokenFilterInput>;
};


export type QueryApplicantArgs = {
  where?: InputMaybe<ApplicantFilterInput>;
};


export type QueryApplicantsArgs = {
  where?: InputMaybe<ApplicantFilterInput>;
};


export type QueryApplicationArgs = {
  where?: InputMaybe<ApplicationFilterInput>;
};


export type QueryApplicationsArgs = {
  where?: InputMaybe<ApplicationFilterInput>;
};


export type QueryFormFieldArgs = {
  where?: InputMaybe<FormFieldQueryInput>;
};


export type QueryFormFieldsArgs = {
  where?: InputMaybe<FormFieldQueryInput>;
};


export type QueryFormTemplateArgs = {
  where?: InputMaybe<FormTemplateFilterInput>;
};


export type QueryFormTemplatesArgs = {
  where?: InputMaybe<FormTemplateFilterInput>;
};


export type QueryLeaseArgs = {
  where?: InputMaybe<LeaseFilterInput>;
};


export type QueryLeasesArgs = {
  where?: InputMaybe<LeaseFilterInput>;
};


export type QueryMemberArgs = {
  id: Scalars['String'];
};


export type QueryMembersArgs = {
  where?: InputMaybe<MemberFilterInput>;
};


export type QueryRentalArgs = {
  filter: RentalFilterInput;
};


export type QueryRentalAvailableArgs = {
  identifier: Scalars['String'];
};


export type QueryRentalTypeArgs = {
  where?: InputMaybe<RentalTypeFilterInput>;
};


export type QueryRentalTypesArgs = {
  where?: InputMaybe<RentalTypeFilterInput>;
};


export type QueryRentalsArgs = {
  paginate?: InputMaybe<PaginationInput>;
  where?: InputMaybe<RentalFilterInput>;
};


export type QueryRoleArgs = {
  id: Scalars['String'];
};


export type QueryTenantArgs = {
  where?: InputMaybe<RentalTenantFilterInput>;
};


export type QueryTenantAvailableArgs = {
  identifier: Scalars['String'];
};


export type QueryTenantsArgs = {
  where?: InputMaybe<RentalTenantFilterInput>;
};


export type QueryUploadsArgs = {
  identifier: Scalars['String'];
};


export type QueryWebhookArgs = {
  id: Scalars['String'];
};


export type QueryWebhooksArgs = {
  paginate?: InputMaybe<PaginationInput>;
  where?: InputMaybe<WebhookFilterInput>;
};

export type ReadAccessTokenInput = {
  id: Scalars['ID'];
  tenantId?: InputMaybe<Scalars['String']>;
};

export type RegisterInput = {
  dateOfBirth: Scalars['DateTime'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type RegisterPushNotificationInput = {
  token: Scalars['String'];
  type: Scalars['String'];
  user: Scalars['String'];
};

export type RegisterPushNotificationResponse = {
  __typename?: 'RegisterPushNotificationResponse';
  success: Scalars['Boolean'];
};

export type Rent = {
  __typename?: 'Rent';
  amount?: Maybe<Scalars['Float']>;
  memo?: Maybe<Scalars['String']>;
  rentCycle?: Maybe<RentCycle>;
  rentStatus?: Maybe<RentStatus>;
};

/** Specifies tenent rent cycle */
export enum RentCycle {
  Biannual = 'BIANNUAL',
  Bimonthly = 'BIMONTHLY',
  Biweekly = 'BIWEEKLY',
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Quaterly = 'QUATERLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export type RentInput = {
  amount: Scalars['String'];
  currency: Scalars['String'];
  memo?: InputMaybe<Scalars['String']>;
  rentCycle: RentCycle;
  rentStatus: RentStatus;
};

/** Specifies tenant rent status */
export enum RentStatus {
  Paid = 'PAID',
  Unpaid = 'UNPAID'
}

export type Rental = {
  __typename?: 'Rental';
  address: Address;
  applicationForm?: Maybe<ApplicationForm>;
  applications?: Maybe<Array<Scalars['String']>>;
  billing?: Maybe<Array<BillingResponse>>;
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  normalizedAddress: Scalars['String'];
  owner?: Maybe<User>;
  rentalManagers?: Maybe<Array<RentalManagerResponse>>;
  rentalOwner?: Maybe<RentalOwnerResponse>;
  rentalType?: Maybe<RentalType>;
  status?: Maybe<RentalStausEnum>;
  units?: Maybe<Array<RentalUnitResponse>>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type RentalBillingSettings = {
  billingAccount?: InputMaybe<Scalars['String']>;
  paymentPlan?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type RentalFilterInput = {
  address?: InputMaybe<AddressInput>;
  billing?: InputMaybe<RentalBillingSettings>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  normalizedAddress?: InputMaybe<Scalars['String']>;
  rentalManagers?: InputMaybe<RentalManagerInput>;
  rentalOwner?: InputMaybe<RentalOwnerInput>;
  rentalType?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<RentalStausEnum>;
  unit?: InputMaybe<RentalUnit>;
};

export type RentalHistory = {
  __typename?: 'RentalHistory';
  endDate?: Maybe<Scalars['String']>;
  landLord?: Maybe<Landlord>;
  reasonForLeaving?: Maybe<Scalars['String']>;
  rent?: Maybe<Scalars['String']>;
  rentCurrency?: Maybe<Scalars['String']>;
  rentCycle?: Maybe<RentCycle>;
  rentalAddress?: Maybe<Address>;
  startDate?: Maybe<Scalars['String']>;
};

export type RentalHistoryInput = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  landLord?: InputMaybe<LandlordInput>;
  reasonForLeaving?: InputMaybe<Scalars['String']>;
  rent?: InputMaybe<Scalars['String']>;
  rentCurrency?: InputMaybe<Scalars['String']>;
  rentCycle?: InputMaybe<RentCycle>;
  rentalAddress?: InputMaybe<AddressInput>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type RentalImage = {
  __typename?: 'RentalImage';
  file?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type RentalManagerInput = {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type RentalManagerResponse = {
  __typename?: 'RentalManagerResponse';
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  normalizedName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type RentalMutations = {
  __typename?: 'RentalMutations';
  create: Rental;
  createApplication: Application;
  createFormField: FormField;
  createFormTemplate: FormTemplate;
  createRentalType: RentalType;
  createTenant: CreateRentalTenantResponse;
  createlease: Lease;
  deletTenant: DeleteRentalTenantResponse;
  delete: Rental;
  deleteApplicant: Applicant;
  deleteApplication: Application;
  deleteFormField: FormField;
  deleteFormTemplate: FormTemplate;
  deleteRentalType: RentalType;
  deletelease: Lease;
  moveIn: MoveInResponse;
  update: Rental;
  updateApplication: Application;
  updateFormField: FormField;
  updateFormTemplate: FormTemplate;
  updateRentalType: RentalType;
  updateTenant: RentalTenant;
  updatelease: Lease;
};


export type RentalMutationsCreateArgs = {
  input: CreateRentalInput;
};


export type RentalMutationsCreateApplicationArgs = {
  input: CreateApplicationInput;
};


export type RentalMutationsCreateFormFieldArgs = {
  input: CreateFormFieldInput;
};


export type RentalMutationsCreateFormTemplateArgs = {
  input: CreateFormTemplateInput;
};


export type RentalMutationsCreateRentalTypeArgs = {
  input: CreateRentalTypeInput;
};


export type RentalMutationsCreateTenantArgs = {
  input: RentalTenantInput;
};


export type RentalMutationsCreateleaseArgs = {
  input: CreateLeaseInput;
};


export type RentalMutationsDeletTenantArgs = {
  input: DeleteRentalTenantInput;
};


export type RentalMutationsDeleteArgs = {
  input: DeleteRentalInput;
};


export type RentalMutationsDeleteApplicantArgs = {
  input: DeleteApplicantInput;
};


export type RentalMutationsDeleteApplicationArgs = {
  input: DeleteApplicationInput;
};


export type RentalMutationsDeleteFormFieldArgs = {
  input: DeleteFormFieldInput;
};


export type RentalMutationsDeleteFormTemplateArgs = {
  input: DeleteFormTemplateInput;
};


export type RentalMutationsDeleteRentalTypeArgs = {
  input: DeleteRentalTypeInput;
};


export type RentalMutationsDeleteleaseArgs = {
  input: DeleteLeaseInput;
};


export type RentalMutationsMoveInArgs = {
  input: MoveInInput;
};


export type RentalMutationsUpdateArgs = {
  input: UpdateRentalInput;
};


export type RentalMutationsUpdateApplicationArgs = {
  input: UpdateApplicationInput;
};


export type RentalMutationsUpdateFormFieldArgs = {
  input: UpdateFormFieldInput;
};


export type RentalMutationsUpdateFormTemplateArgs = {
  input: UpdateFormTemplateInput;
};


export type RentalMutationsUpdateRentalTypeArgs = {
  input: UpdateRentalTypeInput;
};


export type RentalMutationsUpdateTenantArgs = {
  input: UpdateRentalTenantInput;
};


export type RentalMutationsUpdateleaseArgs = {
  input: UpdateLeaseInput;
};

export type RentalOwnerInput = {
  company?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type RentalOwnerResponse = {
  __typename?: 'RentalOwnerResponse';
  company?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** Specifies the rental status */
export enum RentalStausEnum {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

export type RentalSubscription = {
  __typename?: 'RentalSubscription';
  cancelAt: Scalars['DateTime'];
  canceledAt: Scalars['DateTime'];
  collectionMethod?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currentPeriodEnd?: Maybe<Scalars['String']>;
  currentPeriodStart?: Maybe<Scalars['String']>;
  customerEmail?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  latestInvoiceId?: Maybe<Scalars['String']>;
  rentalId: Scalars['String'];
  startDate?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  trialEnd?: Maybe<Scalars['String']>;
  trialStart?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type RentalTenant = {
  __typename?: 'RentalTenant';
  applications: Array<Scalars['String']>;
  contactInformation?: Maybe<TenantContactInformation>;
  createdAt: Scalars['String'];
  emergencyContact?: Maybe<EmergencyContactType>;
  id: Scalars['String'];
  leases?: Maybe<Array<Lease>>;
  personalInformation?: Maybe<PersonalInformation>;
  updatedAt: Scalars['String'];
};

export type RentalTenantAddressInput = {
  __typename?: 'RentalTenantAddressInput';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type RentalTenantFilterInput = {
  applications?: InputMaybe<Array<Scalars['String']>>;
  contactInformation?: InputMaybe<ContactInformationInput>;
  emergencyContact?: InputMaybe<EmergencyContact>;
  id?: InputMaybe<Scalars['String']>;
  leases?: InputMaybe<Array<LeaseInput>>;
  personalInformation?: InputMaybe<PersonalInformationInput>;
};

export type RentalTenantInput = {
  contactInformation: ContactInformationInput;
  emergencyContact: EmergencyContact;
  personalInformation: PersonalInformationInput;
};

export type RentalType = {
  __typename?: 'RentalType';
  category: RentalTypeCategories;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Property Type Categories */
export enum RentalTypeCategories {
  Commercial = 'COMMERCIAL',
  Residential = 'RESIDENTIAL'
}

export type RentalTypeFilterInput = {
  category?: InputMaybe<RentalTypeCategories>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RentalUnit = {
  amenities?: InputMaybe<Amenities>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  occupant?: InputMaybe<Occupant>;
  status?: InputMaybe<RentalStausEnum>;
};

export type RentalUnitResponse = {
  __typename?: 'RentalUnitResponse';
  amenities?: Maybe<AmenitiesResponse>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  occupant?: Maybe<OccupantResponse>;
  status?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  normalizedName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** Authentication service types */
export enum ServiceTypes {
  Facebook = 'Facebook',
  Github = 'Github',
  Google = 'Google',
  Jwt = 'JWT',
  Password = 'Password'
}

export type StringComparisonFilter = {
  _EQ?: InputMaybe<Scalars['String']>;
  _GT?: InputMaybe<Scalars['String']>;
  _GTE?: InputMaybe<Scalars['String']>;
  _LT?: InputMaybe<Scalars['String']>;
  _LTE?: InputMaybe<Scalars['String']>;
  _NE?: InputMaybe<Scalars['String']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  billing?: Maybe<TenantBilling>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  members?: Maybe<Array<Member>>;
  name?: Maybe<Scalars['String']>;
  normalizedName?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  settings?: Maybe<TenantSettings>;
  totalPoints?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type TenantBilling = {
  __typename?: 'TenantBilling';
  currentPlan?: Maybe<Scalars['String']>;
};

export type TenantContactInformation = {
  __typename?: 'TenantContactInformation';
  address?: Maybe<RentalTenantAddressInput>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  normalizedAddress?: Maybe<Scalars['String']>;
  normalizedEmail?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type TenantMutations = {
  __typename?: 'TenantMutations';
  create: Tenant;
  delete: Tenant;
  update: Tenant;
};


export type TenantMutationsCreateArgs = {
  input: CreateTenantInput;
};


export type TenantMutationsDeleteArgs = {
  input: DeleteTenantInput;
};


export type TenantMutationsUpdateArgs = {
  input: UpdateTenantInput;
};

export type TenantSettings = {
  __typename?: 'TenantSettings';
  mqtt?: Maybe<MqttConfig>;
  showStatusIcon?: Maybe<Scalars['Boolean']>;
};

export type TenantSettingsInput = {
  mqtt?: InputMaybe<MqttConfigInput>;
  showStatusIcon?: InputMaybe<Scalars['Boolean']>;
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type UnRegisterPushNotificationInput = {
  token: Scalars['String'];
  user: Scalars['String'];
};

export type UnRegisterPushNotificationTokenResponse = {
  __typename?: 'UnRegisterPushNotificationTokenResponse';
  success: Scalars['Boolean'];
};

export type UpdateApplicationInput = {
  data: UpdateApplicationPayload;
  id: Scalars['ID'];
};

export type UpdateEmergencyContactInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  relationship?: InputMaybe<Scalars['String']>;
};

export type UpdateFormTemplateInput = {
  formTemplate: CreateFormTemplateInput;
  id: Scalars['ID'];
};

export type UpdateLeaseInput = {
  data: UpdateLeasePayload;
  id: Scalars['ID'];
};

export type UpdateLeasePayload = {
  leaseDetails?: InputMaybe<LeaseDetailsInput>;
  leaseType?: InputMaybe<LeaseTypeInput>;
  rent?: InputMaybe<RentInput>;
};

export type UpdateMemberInput = {
  id?: InputMaybe<Scalars['ID']>;
  role: AppRole;
};

export type UpdateRentalInput = {
  data: UpdateRentalPayloadInput;
  id: Scalars['String'];
};

export type UpdateRentalPayloadInput = {
  address?: InputMaybe<AddressInput>;
  billing?: InputMaybe<RentalBillingSettings>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  rentalManagers?: InputMaybe<RentalManagerInput>;
  rentalType?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<RentalStausEnum>;
  units?: InputMaybe<Array<RentalUnit>>;
};

export type UpdateRentalTenantInput = {
  data: UpdateRentalTenantPayload;
  id: Scalars['ID'];
};

export type UpdateRentalTenantPayload = {
  contactInformation?: InputMaybe<ContactInformationInput>;
  emergencyContact?: InputMaybe<UpdateEmergencyContactInput>;
  personalInformation?: InputMaybe<PersonalInformationInput>;
};

export type UpdateRentalTypeInput = {
  data: UpdateRentalTypeInputData;
  id: Scalars['String'];
};

export type UpdateRentalTypeInputData = {
  category?: InputMaybe<RentalTypeCategories>;
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTenantInput = {
  data?: InputMaybe<UpdateTenantPayloadInput>;
  id: Scalars['String'];
};

export type UpdateTenantPayloadInput = {
  name?: InputMaybe<Scalars['String']>;
  settings?: InputMaybe<TenantSettingsInput>;
};

export type UpdateUserInput = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type UpdateWebhookDataInput = {
  action?: InputMaybe<Array<WebhookCrudEnum>>;
  auth: WebhookAuthTypesInput;
  endpoint: Scalars['String'];
  name: Scalars['String'];
  requestType: WebhookHttpVerbEnum;
};

export type UpdateWebhookInput = {
  data: UpdateWebhookDataInput;
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  emails: Array<EmailObject>;
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  primaryEmail: Scalars['String'];
  roles: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type Webhook = {
  __typename?: 'Webhook';
  action: WebhookCrudEnum;
  active: Scalars['Boolean'];
  auth?: Maybe<AuthTypeUnion>;
  createdAt: Scalars['DateTime'];
  endpoint: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  requestType: WebhookHttpVerbEnum;
  updatedAt: Scalars['DateTime'];
};

/** Webhook filter resource enums */
export enum WebhookApiKeyFieldEnum {
  Header = 'HEADER',
  Params = 'PARAMS'
}

/** webhook auth types */
export enum WebhookAuthEnum {
  ApiKey = 'API_KEY',
  Basic = 'BASIC',
  None = 'NONE',
  Oauth_2 = 'OAUTH_2',
  Token = 'TOKEN'
}

export type WebhookAuthType = {
  type: WebhookAuthEnum;
};

export type WebhookAuthTypesInput = {
  apiKey?: InputMaybe<AuthApiKeyInput>;
  basic?: InputMaybe<AuthBasicInput>;
  none?: InputMaybe<AuthNoneInput>;
  oauth2?: InputMaybe<AuthOAuth2Input>;
  token?: InputMaybe<AuthTokenInput>;
};

/** Webhook filter resource enums */
export enum WebhookCrudEnum {
  All = 'ALL',
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type WebhookFilterInput = {
  _AND?: InputMaybe<Array<FilterWebhookInput>>;
  _NOR?: InputMaybe<Array<FilterWebhookInput>>;
  _OR?: InputMaybe<Array<FilterWebhookInput>>;
  active?: InputMaybe<BooleanComparisonFilter>;
  createdAt?: InputMaybe<DateComparisonFilter>;
  endpoint?: InputMaybe<StringComparisonFilter>;
  id?: InputMaybe<StringComparisonFilter>;
  name?: InputMaybe<StringComparisonFilter>;
  updatedAt?: InputMaybe<DateComparisonFilter>;
};

/** The name tells it all. All available HTTP verbs for a webhook request */
export enum WebhookHttpVerbEnum {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type WebhookMutations = {
  __typename?: 'WebhookMutations';
  create: Webhook;
  delete: Webhook;
  update: Webhook;
};


export type WebhookMutationsCreateArgs = {
  input: CreateWebhookInput;
};


export type WebhookMutationsDeleteArgs = {
  input: DeleteWebhookInput;
};


export type WebhookMutationsUpdateArgs = {
  input: UpdateWebhookInput;
};

export type DeleteFormFieldInput = {
  id: Scalars['String'];
};

export type UpdateApplicationPayload = {
  applicationStatus?: InputMaybe<ApplicationStausEnum>;
  terms?: InputMaybe<ApplicationTermsInput>;
};

export type UpdateFormFieldInput = {
  id: Scalars['String'];
  input: FormFieldInput;
};

export type RegisterMutationVariables = Exact<{
  args: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', account?: { __typename?: 'AccountMutations', register: { __typename?: 'AccountRegisterResponse', activationLink: string } } | null };

export type VerifyAccountMutationVariables = Exact<{
  email: Scalars['String'];
  pincode: Scalars['String'];
}>;


export type VerifyAccountMutation = { __typename?: 'Mutation', account?: { __typename?: 'AccountMutations', verifyAccount: { __typename?: 'BooleanPayload', success: boolean } } | null };

export type LoginMutationVariables = Exact<{
  args: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', account?: { __typename?: 'AccountMutations', login: { __typename?: 'Account', id: string, user: { __typename?: 'User', id: string, firstname: string, lastname: string, roles: Array<string>, primaryEmail: string, emails: Array<{ __typename?: 'EmailObject', address: string, primary: boolean, verified: boolean }> }, tokens: { __typename?: 'Tokens', refreshToken: string, accessToken: string } } } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', account?: { __typename?: 'AccountMutations', logout: { __typename?: 'BooleanPayload', success: boolean } } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', profile: { __typename?: 'User', id: string, firstname: string, lastname: string, roles: Array<string>, primaryEmail: string, emails: Array<{ __typename?: 'EmailObject', address: string, primary: boolean, verified: boolean }> } };

export type GetRentalTypesQueryVariables = Exact<{
  args?: InputMaybe<RentalTypeFilterInput>;
}>;


export type GetRentalTypesQuery = { __typename?: 'Query', rentalTypes?: Array<{ __typename?: 'RentalType', id?: string | null, name: string, label?: string | null, category: RentalTypeCategories }> | null };

export type CreateRentalMutationVariables = Exact<{
  args: CreateRentalInput;
}>;


export type CreateRentalMutation = { __typename?: 'Mutation', rental?: { __typename?: 'RentalMutations', create: { __typename?: 'Rental', id?: string | null, name?: string | null, normalizedAddress: string, status?: RentalStausEnum | null, address: { __typename?: 'Address', id?: string | null, line?: string | null, line2?: string | null, city?: string | null, state?: string | null, postalCode?: string | null, country?: string | null }, rentalType?: { __typename?: 'RentalType', id?: string | null, name: string, category: RentalTypeCategories, description?: string | null } | null, rentalOwner?: { __typename?: 'RentalOwnerResponse', firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, company?: boolean | null } | null, units?: Array<{ __typename?: 'RentalUnitResponse', id?: string | null, status?: string | null, amenities?: { __typename?: 'AmenitiesResponse', bathrooms?: number | null, bedrooms?: number | null, toilets?: number | null, others?: string | null, parkingSpace?: boolean | null } | null, occupant?: { __typename?: 'OccupantResponse', name?: string | null, email?: string | null, phone?: string | null } | null }> | null } } | null };

export type SetRentalUnitsMutationVariables = Exact<{
  id: Scalars['String'];
  units?: InputMaybe<Array<RentalUnit> | RentalUnit>;
}>;


export type SetRentalUnitsMutation = { __typename?: 'Mutation', rental?: { __typename?: 'RentalMutations', update: { __typename?: 'Rental', id?: string | null, name?: string | null, normalizedAddress: string, status?: RentalStausEnum | null, address: { __typename?: 'Address', id?: string | null, line?: string | null, line2?: string | null, city?: string | null, state?: string | null, postalCode?: string | null, country?: string | null }, rentalType?: { __typename?: 'RentalType', id?: string | null, name: string, category: RentalTypeCategories, description?: string | null } | null, rentalOwner?: { __typename?: 'RentalOwnerResponse', firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, company?: boolean | null } | null, units?: Array<{ __typename?: 'RentalUnitResponse', id?: string | null, status?: string | null, amenities?: { __typename?: 'AmenitiesResponse', bathrooms?: number | null, bedrooms?: number | null, toilets?: number | null, others?: string | null, parkingSpace?: boolean | null } | null, occupant?: { __typename?: 'OccupantResponse', name?: string | null, email?: string | null, phone?: string | null } | null }> | null } } | null };

export type UpdateRentalAddressInfoMutationVariables = Exact<{
  id: Scalars['String'];
  AddressInput: AddressInput;
}>;


export type UpdateRentalAddressInfoMutation = { __typename?: 'Mutation', rental?: { __typename?: 'RentalMutations', update: { __typename?: 'Rental', id?: string | null, name?: string | null, normalizedAddress: string, status?: RentalStausEnum | null, address: { __typename?: 'Address', id?: string | null, line?: string | null, line2?: string | null, city?: string | null, state?: string | null, postalCode?: string | null, country?: string | null }, rentalType?: { __typename?: 'RentalType', id?: string | null, name: string, category: RentalTypeCategories, description?: string | null } | null, rentalOwner?: { __typename?: 'RentalOwnerResponse', firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, company?: boolean | null } | null, units?: Array<{ __typename?: 'RentalUnitResponse', id?: string | null, status?: string | null, amenities?: { __typename?: 'AmenitiesResponse', bathrooms?: number | null, bedrooms?: number | null, toilets?: number | null, others?: string | null, parkingSpace?: boolean | null } | null, occupant?: { __typename?: 'OccupantResponse', name?: string | null, email?: string | null, phone?: string | null } | null }> | null } } | null };

export type GetUserRentalsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type GetUserRentalsQuery = { __typename?: 'Query', rentals?: Array<{ __typename?: 'Rental', id?: string | null, name?: string | null, normalizedAddress: string, status?: RentalStausEnum | null, address: { __typename?: 'Address', id?: string | null, line?: string | null, line2?: string | null, city?: string | null, state?: string | null, postalCode?: string | null, country?: string | null }, rentalType?: { __typename?: 'RentalType', id?: string | null, name: string, category: RentalTypeCategories, description?: string | null } | null, rentalOwner?: { __typename?: 'RentalOwnerResponse', firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, company?: boolean | null } | null, units?: Array<{ __typename?: 'RentalUnitResponse', id?: string | null, status?: string | null, amenities?: { __typename?: 'AmenitiesResponse', bathrooms?: number | null, bedrooms?: number | null, toilets?: number | null, others?: string | null, parkingSpace?: boolean | null } | null, occupant?: { __typename?: 'OccupantResponse', name?: string | null, email?: string | null, phone?: string | null } | null }> | null }> | null };

export type RentalFullFragment = { __typename?: 'Rental', id?: string | null, name?: string | null, normalizedAddress: string, status?: RentalStausEnum | null, address: { __typename?: 'Address', id?: string | null, line?: string | null, line2?: string | null, city?: string | null, state?: string | null, postalCode?: string | null, country?: string | null }, rentalType?: { __typename?: 'RentalType', id?: string | null, name: string, category: RentalTypeCategories, description?: string | null } | null, rentalOwner?: { __typename?: 'RentalOwnerResponse', firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, company?: boolean | null } | null, units?: Array<{ __typename?: 'RentalUnitResponse', id?: string | null, status?: string | null, amenities?: { __typename?: 'AmenitiesResponse', bathrooms?: number | null, bedrooms?: number | null, toilets?: number | null, others?: string | null, parkingSpace?: boolean | null } | null, occupant?: { __typename?: 'OccupantResponse', name?: string | null, email?: string | null, phone?: string | null } | null }> | null };

export type RentalListFragment = { __typename?: 'Rental', id?: string | null, name?: string | null, normalizedAddress: string, status?: RentalStausEnum | null, rentalType?: { __typename?: 'RentalType', name: string, category: RentalTypeCategories } | null, rentalOwner?: { __typename?: 'RentalOwnerResponse', lastName?: string | null, firstName?: string | null } | null, units?: Array<{ __typename?: 'RentalUnitResponse', id?: string | null, status?: string | null, amenities?: { __typename?: 'AmenitiesResponse', bathrooms?: number | null, bedrooms?: number | null, toilets?: number | null, others?: string | null, parkingSpace?: boolean | null } | null, occupant?: { __typename?: 'OccupantResponse', name?: string | null } | null }> | null };

export type ApplicationsFragment = { __typename?: 'Application', id?: string | null, applicant?: string | null, unit?: string | null };

export const RentalFullFragmentDoc = gql`
    fragment rentalFull on Rental {
  id
  name
  normalizedAddress
  address {
    id
    line
    line2
    city
    state
    postalCode
    country
  }
  rentalType {
    id
    name
    category
    description
  }
  status
  rentalOwner {
    firstName
    lastName
    email
    phone
    company
  }
  units {
    id
    status
    amenities {
      bathrooms
      bedrooms
      toilets
      others
      parkingSpace
    }
    occupant {
      name
      email
      phone
    }
  }
}
    `;
export const RentalListFragmentDoc = gql`
    fragment rentalList on Rental {
  id
  name
  normalizedAddress
  rentalType {
    name
    category
  }
  status
  rentalOwner {
    lastName
    firstName
  }
  units {
    id
    status
    amenities {
      bathrooms
      bedrooms
      toilets
      others
      parkingSpace
    }
    occupant {
      name
    }
  }
}
    `;
export const ApplicationsFragmentDoc = gql`
    fragment applications on Application {
  id
  applicant
  unit
}
    `;
export const RegisterDocument = gql`
    mutation register($args: RegisterInput!) {
  account {
    register(input: $args) {
      activationLink
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const VerifyAccountDocument = gql`
    mutation verifyAccount($email: String!, $pincode: String!) {
  account {
    verifyAccount(email: $email, pincode: $pincode) {
      success
    }
  }
}
    `;
export type VerifyAccountMutationFn = Apollo.MutationFunction<VerifyAccountMutation, VerifyAccountMutationVariables>;

/**
 * __useVerifyAccountMutation__
 *
 * To run a mutation, you first call `useVerifyAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyAccountMutation, { data, loading, error }] = useVerifyAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *      pincode: // value for 'pincode'
 *   },
 * });
 */
export function useVerifyAccountMutation(baseOptions?: Apollo.MutationHookOptions<VerifyAccountMutation, VerifyAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyAccountMutation, VerifyAccountMutationVariables>(VerifyAccountDocument, options);
      }
export type VerifyAccountMutationHookResult = ReturnType<typeof useVerifyAccountMutation>;
export type VerifyAccountMutationResult = Apollo.MutationResult<VerifyAccountMutation>;
export type VerifyAccountMutationOptions = Apollo.BaseMutationOptions<VerifyAccountMutation, VerifyAccountMutationVariables>;
export const LoginDocument = gql`
    mutation login($args: LoginInput!) {
  account {
    login(input: $args) {
      id
      user {
        id
        firstname
        lastname
        roles
        primaryEmail
        emails {
          address
          primary
          verified
        }
      }
      tokens {
        refreshToken
        accessToken
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  account {
    logout {
      success
    }
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query me {
  profile {
    id
    firstname
    lastname
    roles
    primaryEmail
    emails {
      address
      primary
      verified
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetRentalTypesDocument = gql`
    query GetRentalTypes($args: RentalTypeFilterInput) {
  rentalTypes(where: $args) {
    id
    name
    label
    category
  }
}
    `;

/**
 * __useGetRentalTypesQuery__
 *
 * To run a query within a React component, call `useGetRentalTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRentalTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRentalTypesQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetRentalTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetRentalTypesQuery, GetRentalTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRentalTypesQuery, GetRentalTypesQueryVariables>(GetRentalTypesDocument, options);
      }
export function useGetRentalTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRentalTypesQuery, GetRentalTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRentalTypesQuery, GetRentalTypesQueryVariables>(GetRentalTypesDocument, options);
        }
export type GetRentalTypesQueryHookResult = ReturnType<typeof useGetRentalTypesQuery>;
export type GetRentalTypesLazyQueryHookResult = ReturnType<typeof useGetRentalTypesLazyQuery>;
export type GetRentalTypesQueryResult = Apollo.QueryResult<GetRentalTypesQuery, GetRentalTypesQueryVariables>;
export const CreateRentalDocument = gql`
    mutation createRental($args: CreateRentalInput!) {
  rental {
    create(input: $args) {
      ...rentalFull
    }
  }
}
    ${RentalFullFragmentDoc}`;
export type CreateRentalMutationFn = Apollo.MutationFunction<CreateRentalMutation, CreateRentalMutationVariables>;

/**
 * __useCreateRentalMutation__
 *
 * To run a mutation, you first call `useCreateRentalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRentalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRentalMutation, { data, loading, error }] = useCreateRentalMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateRentalMutation(baseOptions?: Apollo.MutationHookOptions<CreateRentalMutation, CreateRentalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRentalMutation, CreateRentalMutationVariables>(CreateRentalDocument, options);
      }
export type CreateRentalMutationHookResult = ReturnType<typeof useCreateRentalMutation>;
export type CreateRentalMutationResult = Apollo.MutationResult<CreateRentalMutation>;
export type CreateRentalMutationOptions = Apollo.BaseMutationOptions<CreateRentalMutation, CreateRentalMutationVariables>;
export const SetRentalUnitsDocument = gql`
    mutation setRentalUnits($id: String!, $units: [RentalUnit!]) {
  rental {
    update(input: {id: $id, data: {units: $units}}) {
      ...rentalFull
    }
  }
}
    ${RentalFullFragmentDoc}`;
export type SetRentalUnitsMutationFn = Apollo.MutationFunction<SetRentalUnitsMutation, SetRentalUnitsMutationVariables>;

/**
 * __useSetRentalUnitsMutation__
 *
 * To run a mutation, you first call `useSetRentalUnitsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetRentalUnitsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setRentalUnitsMutation, { data, loading, error }] = useSetRentalUnitsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      units: // value for 'units'
 *   },
 * });
 */
export function useSetRentalUnitsMutation(baseOptions?: Apollo.MutationHookOptions<SetRentalUnitsMutation, SetRentalUnitsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetRentalUnitsMutation, SetRentalUnitsMutationVariables>(SetRentalUnitsDocument, options);
      }
export type SetRentalUnitsMutationHookResult = ReturnType<typeof useSetRentalUnitsMutation>;
export type SetRentalUnitsMutationResult = Apollo.MutationResult<SetRentalUnitsMutation>;
export type SetRentalUnitsMutationOptions = Apollo.BaseMutationOptions<SetRentalUnitsMutation, SetRentalUnitsMutationVariables>;
export const UpdateRentalAddressInfoDocument = gql`
    mutation updateRentalAddressInfo($id: String!, $AddressInput: AddressInput!) {
  rental {
    update(input: {id: $id, data: {address: $AddressInput}}) {
      ...rentalFull
    }
  }
}
    ${RentalFullFragmentDoc}`;
export type UpdateRentalAddressInfoMutationFn = Apollo.MutationFunction<UpdateRentalAddressInfoMutation, UpdateRentalAddressInfoMutationVariables>;

/**
 * __useUpdateRentalAddressInfoMutation__
 *
 * To run a mutation, you first call `useUpdateRentalAddressInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRentalAddressInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRentalAddressInfoMutation, { data, loading, error }] = useUpdateRentalAddressInfoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      AddressInput: // value for 'AddressInput'
 *   },
 * });
 */
export function useUpdateRentalAddressInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRentalAddressInfoMutation, UpdateRentalAddressInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRentalAddressInfoMutation, UpdateRentalAddressInfoMutationVariables>(UpdateRentalAddressInfoDocument, options);
      }
export type UpdateRentalAddressInfoMutationHookResult = ReturnType<typeof useUpdateRentalAddressInfoMutation>;
export type UpdateRentalAddressInfoMutationResult = Apollo.MutationResult<UpdateRentalAddressInfoMutation>;
export type UpdateRentalAddressInfoMutationOptions = Apollo.BaseMutationOptions<UpdateRentalAddressInfoMutation, UpdateRentalAddressInfoMutationVariables>;
export const GetUserRentalsDocument = gql`
    query GetUserRentals($id: String) {
  rentals(where: {rentalOwner: {id: $id}}) {
    ...rentalFull
  }
}
    ${RentalFullFragmentDoc}`;

/**
 * __useGetUserRentalsQuery__
 *
 * To run a query within a React component, call `useGetUserRentalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserRentalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserRentalsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserRentalsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserRentalsQuery, GetUserRentalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserRentalsQuery, GetUserRentalsQueryVariables>(GetUserRentalsDocument, options);
      }
export function useGetUserRentalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserRentalsQuery, GetUserRentalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserRentalsQuery, GetUserRentalsQueryVariables>(GetUserRentalsDocument, options);
        }
export type GetUserRentalsQueryHookResult = ReturnType<typeof useGetUserRentalsQuery>;
export type GetUserRentalsLazyQueryHookResult = ReturnType<typeof useGetUserRentalsLazyQuery>;
export type GetUserRentalsQueryResult = Apollo.QueryResult<GetUserRentalsQuery, GetUserRentalsQueryVariables>;