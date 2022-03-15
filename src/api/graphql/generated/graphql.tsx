import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  scopes: Array<Scalars['String']>;
  token: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  expireAt?: Maybe<Scalars['String']>;
};

export type AccessTokenFilterInput = {
  _OR?: Maybe<Array<FilterAccessTokenInput>>;
  _AND?: Maybe<Array<FilterAccessTokenInput>>;
  _NOR?: Maybe<Array<FilterAccessTokenInput>>;
  id?: Maybe<StringComparisonFilter>;
  createdAt?: Maybe<DateComparisonFilter>;
  updatedAt?: Maybe<DateComparisonFilter>;
  active?: Maybe<BooleanComparisonFilter>;
  tenantId?: Maybe<Scalars['String']>;
};

export type AccessTokenMutations = {
  __typename?: 'AccessTokenMutations';
  delete: AccessToken;
  create: AccessToken;
};


export type AccessTokenMutationsDeleteArgs = {
  input: DeleteAccessTokenInput;
};


export type AccessTokenMutationsCreateArgs = {
  input: CreateAccessTokenInput;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  user: User;
  tokens: Tokens;
};

export type AccountMutations = {
  __typename?: 'AccountMutations';
  login: Account;
  register: AccountRegisterResponse;
  sendResetPasswordEmail: BooleanPayload;
  sendVerificationEmail: BooleanPayload;
  changePassword: BooleanPayload;
  refreshTokens: Account;
  verifyAccount: BooleanPayload;
  verifyExpireToken: ExpirableTokens;
  verifyActivationLink: VerificationLinkInfo;
  logout: BooleanPayload;
};


export type AccountMutationsLoginArgs = {
  input: LoginInput;
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


export type AccountMutationsChangePasswordArgs = {
  newPasswordConfirm: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type AccountMutationsRefreshTokensArgs = {
  refreshToken: Scalars['String'];
  accessToken: Scalars['String'];
};


export type AccountMutationsVerifyAccountArgs = {
  email: Scalars['String'];
  pincode: Scalars['String'];
};


export type AccountMutationsVerifyExpireTokenArgs = {
  token: Scalars['Float'];
};


export type AccountMutationsVerifyActivationLinkArgs = {
  token: Scalars['String'];
};

export type AccountRegisterResponse = {
  __typename?: 'AccountRegisterResponse';
  activationLink: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  id?: Maybe<Scalars['ID']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  line?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
};

export type Amenities = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  parking?: Maybe<Scalars['Boolean']>;
  toilets?: Maybe<Scalars['Float']>;
  others?: Maybe<Scalars['String']>;
};

export type AmenitiesResponse = {
  __typename?: 'AmenitiesResponse';
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  parkingSpace?: Maybe<Scalars['Boolean']>;
  toilets?: Maybe<Scalars['Float']>;
  others?: Maybe<Scalars['String']>;
};

/** The App roles for authorization */
export enum AppRole {
  Owner = 'OWNER',
  Admin = 'ADMIN',
  Developer = 'DEVELOPER',
  Member = 'MEMBER',
  Guest = 'GUEST',
  Customer = 'CUSTOMER'
}

/** Specifies the  Application status */
export enum ApplicationStausEnum {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Declined = 'DECLINED'
}

export type AuthApiKey = WebhookAuthType & {
  __typename?: 'AuthApiKey';
  type: WebhookAuthEnum;
  key: Scalars['String'];
  value: Scalars['String'];
  addTo: WebhookApiKeyFieldEnum;
};

export type AuthApiKeyInput = {
  type: WebhookAuthEnum;
  key: Scalars['String'];
  value: Scalars['String'];
  addTo: WebhookApiKeyFieldEnum;
};

export type AuthBasic = WebhookAuthType & {
  __typename?: 'AuthBasic';
  type: WebhookAuthEnum;
  username: Scalars['String'];
  password: Scalars['String'];
};

export type AuthBasicInput = {
  type: WebhookAuthEnum;
  username: Scalars['String'];
  password: Scalars['String'];
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
  type: WebhookAuthEnum;
  token: Scalars['String'];
  addTo: WebhookApiKeyFieldEnum;
};

export type AuthOAuth2Input = {
  type: WebhookAuthEnum;
  token: Scalars['String'];
  addTo: WebhookApiKeyFieldEnum;
};

export type AuthToken = WebhookAuthType & {
  __typename?: 'AuthToken';
  type: WebhookAuthEnum;
  token: Scalars['String'];
};

export type AuthTokenInput = {
  type: WebhookAuthEnum;
  token: Scalars['String'];
};

export type AuthTypeUnion = AuthApiKey | AuthOAuth2 | AuthNone | AuthToken | AuthBasic;

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
  tenantId: Scalars['String'];
  id: Scalars['String'];
};


export type BillingSubscriptionsArgs = {
  tenantId: Scalars['String'];
};

export type BillingMutations = {
  __typename?: 'BillingMutations';
  changeSubscription: RentalSubscription;
  cancelSubscription: RentalSubscription;
};


export type BillingMutationsChangeSubscriptionArgs = {
  input: ChangeSubscriptionInput;
};

export type BillingResponse = {
  __typename?: 'BillingResponse';
  billingAccount?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  paymentPlan?: Maybe<Scalars['String']>;
};

export type BooleanComparisonFilter = {
  _EQ?: Maybe<Scalars['Boolean']>;
  _NE?: Maybe<Scalars['Boolean']>;
};

export type BooleanPayload = {
  __typename?: 'BooleanPayload';
  success: Scalars['Boolean'];
};

export type ChangeSubscriptionInput = {
  planId: Scalars['String'];
  couponId?: Maybe<Scalars['String']>;
};

export type CreateAccessTokenInput = {
  tenantId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  scopes?: Maybe<Array<Scalars['String']>>;
  expireAt?: Maybe<Scalars['String']>;
};

export type CreateFormFieldInput = {
  label: Scalars['String'];
  key: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  dataType: FieldDataType;
};

export type CreateFormTemplateInput = {
  name: Scalars['String'];
  tag?: Maybe<Scalars['String']>;
  repeatable?: Maybe<Scalars['Boolean']>;
  prefixText?: Maybe<Scalars['String']>;
  postfixText?: Maybe<Scalars['String']>;
  fieldIds: Array<Scalars['String']>;
};

export type CreateRentalInput = {
  name: Scalars['String'];
  rentalType: Scalars['String'];
  address: AddressInput;
  rentalOwner?: Maybe<RentalOwnerInput>;
};

export type CreateRentalTypeInput = {
  name: Scalars['String'];
  label: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  category: RentalTypeCategories;
};

export type CreateTenantInput = {
  name: Scalars['String'];
  planId: Scalars['String'];
  couponId?: Maybe<Scalars['String']>;
  cardId?: Maybe<Scalars['String']>;
};

export type CreateWebhookInput = {
  name: Scalars['String'];
  endpoint: Scalars['String'];
  action?: Maybe<Array<WebhookCrudEnum>>;
  requestType: WebhookHttpVerbEnum;
  auth: WebhookAuthTypesInput;
};

export type DateComparisonFilter = {
  _EQ?: Maybe<Scalars['DateTime']>;
  _NE?: Maybe<Scalars['DateTime']>;
  _LT?: Maybe<Scalars['DateTime']>;
  _LTE?: Maybe<Scalars['DateTime']>;
  _GT?: Maybe<Scalars['DateTime']>;
  _GTE?: Maybe<Scalars['DateTime']>;
};


export type DeleteAccessTokenInput = {
  tenantId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteFormTemplateInput = {
  id: Scalars['ID'];
};

export type DeleteMemberInput = {
  id: Scalars['ID'];
  tenantId: Scalars['String'];
};

export type DeleteRentalInput = {
  id: Scalars['ID'];
};

export type DeleteRentalTypeInput = {
  id: Scalars['String'];
};

export type DeleteTenantInput = {
  id: Scalars['ID'];
};

export type DeleteWebhookInput = {
  id?: Maybe<Scalars['String']>;
};

export type EmailObject = {
  __typename?: 'EmailObject';
  address: Scalars['String'];
  primary: Scalars['Boolean'];
  verified: Scalars['Boolean'];
};

export type ExpirableTokens = {
  __typename?: 'ExpirableTokens';
  sub?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  iat?: Maybe<Scalars['String']>;
};

/** Enum type for form fields */
export enum FieldDataType {
  FieldDataTypeString = 'FieldDataType_STRING',
  FieldDataTypeNumber = 'FieldDataType_NUMBER',
  FieldDataTypeAddress = 'FieldDataType_Address',
  FieldDataTypeBoolean = 'FieldDataType_BOOLEAN',
  FieldDataTypeCurrency = 'FieldDataType_Currency',
  FieldDataTypeDatetime = 'FieldDataType_DATETIME',
  FieldDataTypeAttachment = 'FieldDataType_ATTACHMENT',
  FieldDataTypeDateRange = 'FieldDataType_DateRange',
  FieldDataTypeRadiobutton = 'FieldDataType_RADIOBUTTON',
  FieldDataTypeCheckbox = 'FieldDataType_CHECKBOX',
  FieldDataTypeEmail = 'FieldDataType_Email'
}

export type FilterAccessTokenInput = {
  _OR?: Maybe<Array<FilterAccessTokenInput>>;
  _AND?: Maybe<Array<FilterAccessTokenInput>>;
  _NOR?: Maybe<Array<FilterAccessTokenInput>>;
  id?: Maybe<StringComparisonFilter>;
  createdAt?: Maybe<DateComparisonFilter>;
  updatedAt?: Maybe<DateComparisonFilter>;
  active?: Maybe<BooleanComparisonFilter>;
};

export type FilterTenantInput = {
  _OR?: Maybe<Array<FilterTenantInput>>;
  _AND?: Maybe<Array<FilterTenantInput>>;
  _NOR?: Maybe<Array<FilterTenantInput>>;
  id?: Maybe<StringComparisonFilter>;
  createdAt?: Maybe<DateComparisonFilter>;
  updatedAt?: Maybe<DateComparisonFilter>;
  name?: Maybe<StringComparisonFilter>;
  normalizedName?: Maybe<StringComparisonFilter>;
};

export type FilterWebhookInput = {
  _OR?: Maybe<Array<FilterWebhookInput>>;
  _AND?: Maybe<Array<FilterWebhookInput>>;
  _NOR?: Maybe<Array<FilterWebhookInput>>;
  id?: Maybe<StringComparisonFilter>;
  createdAt?: Maybe<DateComparisonFilter>;
  updatedAt?: Maybe<DateComparisonFilter>;
  name?: Maybe<StringComparisonFilter>;
  endpoint?: Maybe<StringComparisonFilter>;
  active?: Maybe<BooleanComparisonFilter>;
};

export type FormField = {
  __typename?: 'FormField';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  dataType: FieldDataType;
  key: Scalars['String'];
  label: Scalars['String'];
};

export type FormFieldInput = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  dataType?: Maybe<FieldDataType>;
  key: Scalars['String'];
};

export type FormFieldQueryInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dataType?: Maybe<FieldDataType>;
};

export type FormTemplate = {
  __typename?: 'FormTemplate';
  id: Scalars['String'];
  name: Scalars['String'];
  postfixText: Scalars['String'];
  prefixText: Scalars['String'];
  tag: Scalars['String'];
  repeatable: Scalars['Boolean'];
  formFields?: Maybe<Array<FormField>>;
};

export type FormTemplateFilterInput = {
  ids?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  repeatable?: Maybe<Scalars['Boolean']>;
  prefixText?: Maybe<Scalars['String']>;
  postfixText?: Maybe<Scalars['String']>;
  fieldIds?: Maybe<Array<Scalars['String']>>;
};

/** The tenant member invitation status */
export enum InvitationStatus {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED'
}

export type InviteMemberInput = {
  email?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
  role: AppRole;
};

export type Invoice = {
  __typename?: 'Invoice';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  accountCountry?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  billingReason?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customerEmail?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  endingBalance?: Maybe<Scalars['Float']>;
  hostedInvoiceUrl?: Maybe<Scalars['String']>;
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
};

/** Invoice status enum */
export enum InvoiceStatus {
  Draft = 'DRAFT',
  Open = 'OPEN',
  Paid = 'PAID',
  Uncollectible = 'UNCOLLECTIBLE',
  Void = 'VOID'
}

export type LoginInput = {
  service: ServiceTypes;
  params: LoginParamsInput;
};

export type LoginParamsInput = {
  /** Access token for social (Service: Twitter, Github, Email) */
  accessToken?: Maybe<Scalars['String']>;
  /** Access token for social (Service: Twitter, Github, Email) */
  accessTokenSecret?: Maybe<Scalars['String']>;
  /** User password (Service: Password) */
  password?: Maybe<Scalars['String']>;
  /** Primary email of the user (Service: Password) */
  email?: Maybe<Scalars['String']>;
};

export type Member = {
  __typename?: 'Member';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
  status: InvitationStatus;
  role: AppRole;
  tenant: Tenant;
  displayName: Scalars['String'];
};

export type MemberFilterInput = {
  status?: Maybe<InvitationStatus>;
  role?: Maybe<AppRole>;
  tenantId?: Maybe<Scalars['String']>;
};

export type MemberMutations = {
  __typename?: 'MemberMutations';
  invite: Member;
  update: Member;
  delete: Member;
};


export type MemberMutationsInviteArgs = {
  input: InviteMemberInput;
};


export type MemberMutationsUpdateArgs = {
  input: UpdateMemberInput;
};


export type MemberMutationsDeleteArgs = {
  input: DeleteMemberInput;
};

export type MqttConfig = {
  __typename?: 'MqttConfig';
  uri?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  password: Scalars['String'];
};

export type MqttConfigInput = {
  uri?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  account?: Maybe<AccountMutations>;
  tenant?: Maybe<TenantMutations>;
  webhook?: Maybe<WebhookMutations>;
  rental?: Maybe<RentalMutations>;
  billing?: Maybe<BillingMutations>;
  profile?: Maybe<ProfileMutations>;
  member?: Maybe<MemberMutations>;
  accessToken?: Maybe<AccessTokenMutations>;
};

export type Occupant = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type OccupantResponse = {
  __typename?: 'OccupantResponse';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type PaginationInput = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
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
  roles: Array<Role>;
  role: Role;
  tenantAvailable?: Maybe<Scalars['Boolean']>;
  tenant?: Maybe<Tenant>;
  tenants?: Maybe<Array<Tenant>>;
  webhook?: Maybe<Webhook>;
  webhooks?: Maybe<Array<Webhook>>;
  rentalAvailable?: Maybe<Scalars['Boolean']>;
  rental?: Maybe<Rental>;
  rentals?: Maybe<Array<Rental>>;
  rentalType?: Maybe<RentalType>;
  rentalTypes?: Maybe<Array<RentalType>>;
  formField?: Maybe<FormField>;
  formFields?: Maybe<Array<FormField>>;
  formTemplate?: Maybe<FormTemplate>;
  formTemplates?: Maybe<Array<FormTemplate>>;
  billing?: Maybe<Billing>;
  profile: User;
  member: Member;
  members?: Maybe<Array<Member>>;
  accessTokens?: Maybe<Array<AccessToken>>;
  accessToken?: Maybe<AccessToken>;
};


export type QueryRoleArgs = {
  id: Scalars['String'];
};


export type QueryTenantAvailableArgs = {
  identifier: Scalars['String'];
};


export type QueryTenantArgs = {
  filter: TenantFilterInput;
};


export type QueryTenantsArgs = {
  where?: Maybe<TenantFilterInput>;
  paginate?: Maybe<PaginationInput>;
};


export type QueryWebhookArgs = {
  id: Scalars['String'];
};


export type QueryWebhooksArgs = {
  where?: Maybe<WebhookFilterInput>;
  paginate?: Maybe<PaginationInput>;
};


export type QueryRentalAvailableArgs = {
  identifier: Scalars['String'];
};


export type QueryRentalArgs = {
  filter: RentalFilterInput;
};


export type QueryRentalsArgs = {
  where?: Maybe<RentalFilterInput>;
  paginate?: Maybe<PaginationInput>;
};


export type QueryRentalTypeArgs = {
  where?: Maybe<RentalTypeFilterInput>;
};


export type QueryRentalTypesArgs = {
  where?: Maybe<RentalTypeFilterInput>;
};


export type QueryFormFieldArgs = {
  where?: Maybe<FormFieldQueryInput>;
};


export type QueryFormFieldsArgs = {
  where?: Maybe<FormFieldQueryInput>;
};


export type QueryFormTemplateArgs = {
  where?: Maybe<FormTemplateFilterInput>;
};


export type QueryFormTemplatesArgs = {
  where?: Maybe<FormTemplateFilterInput>;
};


export type QueryMemberArgs = {
  id: Scalars['String'];
};


export type QueryMembersArgs = {
  where?: Maybe<MemberFilterInput>;
};


export type QueryAccessTokensArgs = {
  where?: Maybe<AccessTokenFilterInput>;
  paginate?: Maybe<PaginationInput>;
};


export type QueryAccessTokenArgs = {
  input: ReadAccessTokenInput;
};

export type ReadAccessTokenInput = {
  tenantId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type RegisterInput = {
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  dateOfBirth: Scalars['DateTime'];
  password: Scalars['String'];
};

export type Rental = {
  __typename?: 'Rental';
  id?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  address: Address;
  normalizedAddress: Scalars['String'];
  rentalType?: Maybe<RentalType>;
  status?: Maybe<RentalStausEnum>;
  rentalManagers?: Maybe<Array<RentalManagerResponse>>;
  billing?: Maybe<Array<BillingResponse>>;
  rentalOwner?: Maybe<RentalOwnerResponse>;
  units?: Maybe<Array<RentalUnitResponse>>;
  owner?: Maybe<User>;
};

export type RentalApplicationFormData = {
  __typename?: 'RentalApplicationFormData';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  nationalIdentityNumber?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  rental?: Maybe<Scalars['String']>;
  emergencyContactName?: Maybe<Scalars['String']>;
  emergencyContactRelationship?: Maybe<Scalars['String']>;
  emergencyContactAddress: Address;
  applicationStatus?: Maybe<ApplicationStausEnum>;
  user?: Maybe<Scalars['String']>;
};

export type RentalApplicationUser = {
  __typename?: 'RentalApplicationUser';
  id?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  address: Address;
  email?: Maybe<Scalars['String']>;
};

export type RentalBillingSettings = {
  billingAccount?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  paymentPlan?: Maybe<Scalars['String']>;
};

export type RentalFilterInput = {
  id?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
  name?: Maybe<Scalars['String']>;
  normalizedAddress?: Maybe<Scalars['String']>;
  status?: Maybe<RentalStausEnum>;
  rentalType?: Maybe<Scalars['String']>;
  billing?: Maybe<RentalBillingSettings>;
  rentalManagers?: Maybe<RentalManagerInput>;
  rentalOwner?: Maybe<RentalOwnerInput>;
  unit?: Maybe<RentalUnit>;
};

export type RentalManagerInput = {
  id?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type RentalManagerResponse = {
  __typename?: 'RentalManagerResponse';
  id?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  normalizedName?: Maybe<Scalars['String']>;
};

export type RentalMutations = {
  __typename?: 'RentalMutations';
  create: Rental;
  update: Rental;
  delete: Rental;
  createRentalType: RentalType;
  updateRentalType: RentalType;
  deleteRentalType: RentalType;
  createFormField: FormField;
  createFormTemplate: FormTemplate;
  updateFormTemplate: FormTemplate;
  deleteFormTemplate: FormTemplate;
  deleteFormField: FormField;
  updateFormField: FormField;
};


export type RentalMutationsCreateArgs = {
  input: CreateRentalInput;
};


export type RentalMutationsUpdateArgs = {
  input: UpdateRentalInput;
};


export type RentalMutationsDeleteArgs = {
  input: DeleteRentalInput;
};


export type RentalMutationsCreateRentalTypeArgs = {
  input: CreateRentalTypeInput;
};


export type RentalMutationsUpdateRentalTypeArgs = {
  input: UpdateRentalTypeInput;
};


export type RentalMutationsDeleteRentalTypeArgs = {
  input: DeleteRentalTypeInput;
};


export type RentalMutationsCreateFormFieldArgs = {
  input: CreateFormFieldInput;
};


export type RentalMutationsCreateFormTemplateArgs = {
  input: CreateFormTemplateInput;
};


export type RentalMutationsUpdateFormTemplateArgs = {
  input: UpdateFormTemplateInput;
};


export type RentalMutationsDeleteFormTemplateArgs = {
  input: DeleteFormTemplateInput;
};


export type RentalMutationsDeleteFormFieldArgs = {
  input: DeleteFormFieldInput;
};


export type RentalMutationsUpdateFormFieldArgs = {
  input: UpdateFormFieldInput;
};

export type RentalOwnerInput = {
  id?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['Boolean']>;
};

export type RentalOwnerResponse = {
  __typename?: 'RentalOwnerResponse';
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['Boolean']>;
};

/** Specifies the rental status */
export enum RentalStausEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Draft = 'DRAFT'
}

export type RentalSubscription = {
  __typename?: 'RentalSubscription';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: Scalars['String'];
  rentalId: Scalars['String'];
  canceledAt: Scalars['DateTime'];
  cancelAt: Scalars['DateTime'];
  collectionMethod?: Maybe<Scalars['String']>;
  currentPeriodStart?: Maybe<Scalars['String']>;
  currentPeriodEnd?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  latestInvoiceId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  trialStart?: Maybe<Scalars['String']>;
  trialEnd?: Maybe<Scalars['String']>;
  customerEmail?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
};

export type RentalType = {
  __typename?: 'RentalType';
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  category: RentalTypeCategories;
  description?: Maybe<Scalars['String']>;
};

/** Property Type Categories */
export enum RentalTypeCategories {
  Residential = 'RESIDENTIAL',
  Commercial = 'COMMERCIAL'
}

export type RentalTypeFilterInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  category?: Maybe<RentalTypeCategories>;
  description?: Maybe<Scalars['String']>;
  rentalType: CreateRentalTypeInput;
};

export type RentalUnit = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  occupant?: Maybe<Occupant>;
  amenities?: Maybe<Amenities>;
  status?: Maybe<RentalStausEnum>;
};

export type RentalUnitResponse = {
  __typename?: 'RentalUnitResponse';
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  occupant?: Maybe<OccupantResponse>;
  amenities?: Maybe<AmenitiesResponse>;
  status?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  normalizedName: Scalars['String'];
};

/** Authentication service types */
export enum ServiceTypes {
  Password = 'Password',
  Facebook = 'Facebook',
  Github = 'Github',
  Google = 'Google',
  Jwt = 'JWT'
}

export type StringComparisonFilter = {
  _EQ?: Maybe<Scalars['String']>;
  _NE?: Maybe<Scalars['String']>;
  _LT?: Maybe<Scalars['String']>;
  _LTE?: Maybe<Scalars['String']>;
  _GT?: Maybe<Scalars['String']>;
  _GTE?: Maybe<Scalars['String']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  normalizedName?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  totalPoints?: Maybe<Scalars['Int']>;
  settings?: Maybe<TenantSettings>;
  billing?: Maybe<TenantBilling>;
  members?: Maybe<Array<Member>>;
  owner?: Maybe<User>;
};

export type TenantBilling = {
  __typename?: 'TenantBilling';
  currentPlan?: Maybe<Scalars['String']>;
};

export type TenantFilterInput = {
  _OR?: Maybe<Array<FilterTenantInput>>;
  _AND?: Maybe<Array<FilterTenantInput>>;
  _NOR?: Maybe<Array<FilterTenantInput>>;
  id?: Maybe<StringComparisonFilter>;
  createdAt?: Maybe<DateComparisonFilter>;
  updatedAt?: Maybe<DateComparisonFilter>;
  name?: Maybe<StringComparisonFilter>;
  normalizedName?: Maybe<StringComparisonFilter>;
};

export type TenantMutations = {
  __typename?: 'TenantMutations';
  create: Tenant;
  update: Tenant;
  delete: Tenant;
};


export type TenantMutationsCreateArgs = {
  input: CreateTenantInput;
};


export type TenantMutationsUpdateArgs = {
  input: UpdateTenantInput;
};


export type TenantMutationsDeleteArgs = {
  input: DeleteTenantInput;
};

export type TenantSettings = {
  __typename?: 'TenantSettings';
  showStatusIcon?: Maybe<Scalars['Boolean']>;
  mqtt?: Maybe<MqttConfig>;
};

export type TenantSettingsInput = {
  showStatusIcon?: Maybe<Scalars['Boolean']>;
  mqtt?: Maybe<MqttConfigInput>;
};

export type Tokens = {
  __typename?: 'Tokens';
  refreshToken: Scalars['String'];
  accessToken: Scalars['String'];
};

export type UpdateFormTemplateInput = {
  id: Scalars['ID'];
  formTemplate: CreateFormTemplateInput;
};

export type UpdateMemberInput = {
  id?: Maybe<Scalars['ID']>;
  role: AppRole;
};

export type UpdateRentalInput = {
  id: Scalars['String'];
  data: UpdateRentalPayloadInput;
};

export type UpdateRentalPayloadInput = {
  name?: Maybe<Scalars['String']>;
  rentalType?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
  status?: Maybe<RentalStausEnum>;
  description?: Maybe<Scalars['String']>;
  units?: Maybe<Array<RentalUnit>>;
  rentalManagers?: Maybe<RentalManagerInput>;
  billing?: Maybe<RentalBillingSettings>;
};

export type UpdateRentalTypeInput = {
  id: Scalars['String'];
  data: UpdateRentalTypeInputData;
};

export type UpdateRentalTypeInputData = {
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<RentalTypeCategories>;
};

export type UpdateTenantInput = {
  id: Scalars['String'];
  data?: Maybe<UpdateTenantPayloadInput>;
};

export type UpdateTenantPayloadInput = {
  name?: Maybe<Scalars['String']>;
  settings?: Maybe<TenantSettingsInput>;
};

export type UpdateUserInput = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
};

export type UpdateWebhookDataInput = {
  name: Scalars['String'];
  endpoint: Scalars['String'];
  action?: Maybe<Array<WebhookCrudEnum>>;
  requestType: WebhookHttpVerbEnum;
  auth: WebhookAuthTypesInput;
};

export type UpdateWebhookInput = {
  id: Scalars['ID'];
  data: UpdateWebhookDataInput;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  roles: Array<Scalars['String']>;
  primaryEmail: Scalars['String'];
  emails: Array<EmailObject>;
};

export type VerificationLinkInfo = {
  __typename?: 'VerificationLinkInfo';
  email?: Maybe<Scalars['String']>;
  pincode?: Maybe<Scalars['String']>;
};

export type Webhook = {
  __typename?: 'Webhook';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  endpoint: Scalars['String'];
  requestType: WebhookHttpVerbEnum;
  action: WebhookCrudEnum;
  active: Scalars['Boolean'];
  auth?: Maybe<AuthTypeUnion>;
};

/** Webhook filter resource enums */
export enum WebhookApiKeyFieldEnum {
  Header = 'HEADER',
  Params = 'PARAMS'
}

/** webhook auth types */
export enum WebhookAuthEnum {
  None = 'NONE',
  Basic = 'BASIC',
  ApiKey = 'API_KEY',
  Token = 'TOKEN',
  Oauth_2 = 'OAUTH_2'
}

export type WebhookAuthType = {
  type: WebhookAuthEnum;
};

export type WebhookAuthTypesInput = {
  basic?: Maybe<AuthBasicInput>;
  oauth2?: Maybe<AuthOAuth2Input>;
  token?: Maybe<AuthTokenInput>;
  apiKey?: Maybe<AuthApiKeyInput>;
  none?: Maybe<AuthNoneInput>;
};

/** Webhook filter resource enums */
export enum WebhookCrudEnum {
  Update = 'UPDATE',
  Delete = 'DELETE',
  Create = 'CREATE',
  All = 'ALL'
}

export type WebhookFilterInput = {
  _OR?: Maybe<Array<FilterWebhookInput>>;
  _AND?: Maybe<Array<FilterWebhookInput>>;
  _NOR?: Maybe<Array<FilterWebhookInput>>;
  id?: Maybe<StringComparisonFilter>;
  createdAt?: Maybe<DateComparisonFilter>;
  updatedAt?: Maybe<DateComparisonFilter>;
  name?: Maybe<StringComparisonFilter>;
  endpoint?: Maybe<StringComparisonFilter>;
  active?: Maybe<BooleanComparisonFilter>;
};

/** The name tells it all. All available HTTP verbs for a webhook request */
export enum WebhookHttpVerbEnum {
  Post = 'POST',
  Get = 'GET',
  Put = 'PUT',
  Delete = 'DELETE',
  Patch = 'PATCH'
}

export type WebhookMutations = {
  __typename?: 'WebhookMutations';
  create: Webhook;
  update: Webhook;
  delete: Webhook;
};


export type WebhookMutationsCreateArgs = {
  input: CreateWebhookInput;
};


export type WebhookMutationsUpdateArgs = {
  input: UpdateWebhookInput;
};


export type WebhookMutationsDeleteArgs = {
  input: DeleteWebhookInput;
};

export type DeleteFormFieldInput = {
  id: Scalars['String'];
};

export type UpdateFormFieldInput = {
  id: Scalars['String'];
  input: FormFieldInput;
};

export type RegisterMutationVariables = Exact<{
  args: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', account?: Maybe<{ __typename?: 'AccountMutations', register: { __typename?: 'AccountRegisterResponse', activationLink: string } }> };

export type VerifyActivationLinkMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyActivationLinkMutation = { __typename?: 'Mutation', account?: Maybe<{ __typename?: 'AccountMutations', verifyActivationLink: { __typename?: 'VerificationLinkInfo', email?: Maybe<string>, pincode?: Maybe<string> } }> };

export type VerifyAccountMutationVariables = Exact<{
  email: Scalars['String'];
  pincode: Scalars['String'];
}>;


export type VerifyAccountMutation = { __typename?: 'Mutation', account?: Maybe<{ __typename?: 'AccountMutations', verifyAccount: { __typename?: 'BooleanPayload', success: boolean } }> };

export type LoginMutationVariables = Exact<{
  args: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', account?: Maybe<{ __typename?: 'AccountMutations', login: { __typename?: 'Account', id: string, user: { __typename?: 'User', id: string, firstname: string, lastname: string, roles: Array<string>, primaryEmail: string, emails: Array<{ __typename?: 'EmailObject', address: string, primary: boolean, verified: boolean }> }, tokens: { __typename?: 'Tokens', refreshToken: string, accessToken: string } } }> };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', account?: Maybe<{ __typename?: 'AccountMutations', logout: { __typename?: 'BooleanPayload', success: boolean } }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', profile: { __typename?: 'User', id: string, firstname: string, lastname: string, roles: Array<string>, primaryEmail: string, emails: Array<{ __typename?: 'EmailObject', address: string, primary: boolean, verified: boolean }> } };

export type GetRentalTypesQueryVariables = Exact<{
  args?: Maybe<RentalTypeFilterInput>;
}>;


export type GetRentalTypesQuery = { __typename?: 'Query', rentalTypes?: Maybe<Array<{ __typename?: 'RentalType', id?: Maybe<string>, name: string, label?: Maybe<string>, category: RentalTypeCategories }>> };

export type CreateRentalMutationVariables = Exact<{
  args: CreateRentalInput;
}>;


export type CreateRentalMutation = { __typename?: 'Mutation', rental?: Maybe<{ __typename?: 'RentalMutations', create: { __typename?: 'Rental', id?: Maybe<string>, name?: Maybe<string>, normalizedAddress: string, status?: Maybe<RentalStausEnum>, address: { __typename?: 'Address', id?: Maybe<string>, line?: Maybe<string>, line2?: Maybe<string>, city?: Maybe<string>, state?: Maybe<string>, postalCode?: Maybe<string>, country?: Maybe<string> }, rentalType?: Maybe<{ __typename?: 'RentalType', id?: Maybe<string>, name: string, category: RentalTypeCategories, description?: Maybe<string> }>, rentalOwner?: Maybe<{ __typename?: 'RentalOwnerResponse', name?: Maybe<string>, email?: Maybe<string>, phone?: Maybe<string>, company?: Maybe<boolean> }>, units?: Maybe<Array<{ __typename?: 'RentalUnitResponse', id?: Maybe<string>, status?: Maybe<string>, amenities?: Maybe<{ __typename?: 'AmenitiesResponse', bathrooms?: Maybe<number>, bedrooms?: Maybe<number>, toilets?: Maybe<number>, others?: Maybe<string>, parkingSpace?: Maybe<boolean> }>, occupant?: Maybe<{ __typename?: 'OccupantResponse', name?: Maybe<string>, email?: Maybe<string>, phone?: Maybe<string> }> }>> } }> };

export type SetRentalUnitsMutationVariables = Exact<{
  id: Scalars['String'];
  units?: Maybe<Array<RentalUnit> | RentalUnit>;
}>;


export type SetRentalUnitsMutation = { __typename?: 'Mutation', rental?: Maybe<{ __typename?: 'RentalMutations', update: { __typename?: 'Rental', id?: Maybe<string>, name?: Maybe<string>, normalizedAddress: string, status?: Maybe<RentalStausEnum>, address: { __typename?: 'Address', id?: Maybe<string>, line?: Maybe<string>, line2?: Maybe<string>, city?: Maybe<string>, state?: Maybe<string>, postalCode?: Maybe<string>, country?: Maybe<string> }, rentalType?: Maybe<{ __typename?: 'RentalType', id?: Maybe<string>, name: string, category: RentalTypeCategories, description?: Maybe<string> }>, rentalOwner?: Maybe<{ __typename?: 'RentalOwnerResponse', name?: Maybe<string>, email?: Maybe<string>, phone?: Maybe<string>, company?: Maybe<boolean> }>, units?: Maybe<Array<{ __typename?: 'RentalUnitResponse', id?: Maybe<string>, status?: Maybe<string>, amenities?: Maybe<{ __typename?: 'AmenitiesResponse', bathrooms?: Maybe<number>, bedrooms?: Maybe<number>, toilets?: Maybe<number>, others?: Maybe<string>, parkingSpace?: Maybe<boolean> }>, occupant?: Maybe<{ __typename?: 'OccupantResponse', name?: Maybe<string>, email?: Maybe<string>, phone?: Maybe<string> }> }>> } }> };


export type UpdateRentalAdressMutation = { __typename?: 'Mutation', update: { __typename?: 'Rental', normalizedAddress: string, address: { __typename?: 'Address', line?: Maybe<string>, line2?: Maybe<string>, city?: Maybe<string>, state?: Maybe<string>, postalCode?: Maybe<string>, country?: Maybe<string> }, rentalType?: Maybe<{ __typename?: 'RentalType', id?: Maybe<string>, name: string, category: RentalTypeCategories, description?: Maybe<string> }> }};

export type GetUserRentalsQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;

export type setRentalInformation = { __typename?: 'Mutation', rental?: Maybe<{ __typename?: 'RentalMutations', update: { __typename?: 'Rental', id?: Maybe<string>, name?: Maybe<string>, normalizedAddress: string, status?: Maybe<RentalStausEnum>, address: { __typename?: 'Address', id?: Maybe<string>, line?: Maybe<string>, line2?: Maybe<string>, city?: Maybe<string>, state?: Maybe<string>, postalCode?: Maybe<string>, country?: Maybe<string> }, rentalType?: Maybe<{ __typename?: 'RentalType', id?: Maybe<string>, name: string, category: RentalTypeCategories, description?: Maybe<string> }>, rentalOwner?: Maybe<{ __typename?: 'RentalOwnerResponse', name?: Maybe<string>, email?: Maybe<string>, phone?: Maybe<string>, company?: Maybe<boolean> }>, units?: Maybe<Array<{ __typename?: 'RentalUnitResponse', id?: Maybe<string>, status?: Maybe<string>, amenities?: Maybe<{ __typename?: 'AmenitiesResponse', bathrooms?: Maybe<number>, bedrooms?: Maybe<number>, toilets?: Maybe<number>, others?: Maybe<string>, parkingSpace?: Maybe<boolean> }>, occupant?: Maybe<{ __typename?: 'OccupantResponse', name?: Maybe<string>, email?: Maybe<string>, phone?: Maybe<string> }> }>> } }> };

export type GetUserRentalsQuery = { __typename?: 'Query', rentals?: Maybe<Array<{ __typename?: 'Rental', id?: Maybe<string>, name?: Maybe<string>, normalizedAddress: string, status?: Maybe<RentalStausEnum>, address: { __typename?: 'Address', id?: Maybe<string>, line?: Maybe<string>, line2?: Maybe<string>, city?: Maybe<string>, state?: Maybe<string>, postalCode?: Maybe<string>, country?: Maybe<string> }, rentalType?: Maybe<{ __typename?: 'RentalType', id?: Maybe<string>, name: string, category: RentalTypeCategories, description?: Maybe<string> }>, rentalOwner?: Maybe<{ __typename?: 'RentalOwnerResponse', lastName?: Maybe<string>,firstName?: Maybe<string>, email?: Maybe<string>, phone?: Maybe<string>, company?: Maybe<boolean> }>, units?: Maybe<Array<{ __typename?: 'RentalUnitResponse', id?: Maybe<string>, status?: Maybe<string>, amenities?: Maybe<{ __typename?: 'AmenitiesResponse', bathrooms?: Maybe<number>, bedrooms?: Maybe<number>, toilets?: Maybe<number>, others?: Maybe<string>, parkingSpace?: Maybe<boolean> }>, occupant?: Maybe<{ __typename?: 'OccupantResponse', name?: Maybe<string>, email?: Maybe<string>, phone?: Maybe<string> }> }>> }>> };

export type RentalFullFragment = { __typename?: 'Rental', id?: Maybe<string>, name?: Maybe<string>, normalizedAddress: string, status?: Maybe<RentalStausEnum>, address: { __typename?: 'Address', id?: Maybe<string>, line?: Maybe<string>, line2?: Maybe<string>, city?: Maybe<string>, state?: Maybe<string>, postalCode?: Maybe<string>, country?: Maybe<string> }, rentalType?: Maybe<{ __typename?: 'RentalType', id?: Maybe<string>, name: string, category: RentalTypeCategories, description?: Maybe<string> }>, rentalOwner?: Maybe<{ __typename?: 'RentalOwnerResponse', name?: Maybe<string>, email?: Maybe<string>, phone?: Maybe<string>, company?: Maybe<boolean> }>, units?: Maybe<Array<{ __typename?: 'RentalUnitResponse', id?: Maybe<string>, status?: Maybe<string>, amenities?: Maybe<{ __typename?: 'AmenitiesResponse', bathrooms?: Maybe<number>, bedrooms?: Maybe<number>, toilets?: Maybe<number>, others?: Maybe<string>, parkingSpace?: Maybe<boolean> }>, occupant?: Maybe<{ __typename?: 'OccupantResponse', name?: Maybe<string>, email?: Maybe<string>, phone?: Maybe<string> }> }>> };

export type RentalListFragment = { __typename?: 'Rental', id?: Maybe<string>, name?: Maybe<string>, normalizedAddress: string, status?: Maybe<RentalStausEnum>, rentalType?: Maybe<{ __typename?: 'RentalType', name: string, category: RentalTypeCategories }>, rentalOwner?: Maybe<{ __typename?: 'RentalOwnerResponse', name?: Maybe<string> }>, units?: Maybe<Array<{ __typename?: 'RentalUnitResponse', id?: Maybe<string>, status?: Maybe<string>, amenities?: Maybe<{ __typename?: 'AmenitiesResponse', bathrooms?: Maybe<number>, bedrooms?: Maybe<number>, toilets?: Maybe<number>, others?: Maybe<string>, parkingSpace?: Maybe<boolean> }>, occupant?: Maybe<{ __typename?: 'OccupantResponse', name?: Maybe<string> }> }>> };


export const setRentalInformationDocument =gql`
mutation editRentalInformation($email: String!, $pincode: String!) {
  account {
    verifyAccount(email: $email, pincode: $pincode) {
      success
    }
  }
}



`

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
    name
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
export const VerifyActivationLinkDocument = gql`
    mutation verifyActivationLink($token: String!) {
  account {
    verifyActivationLink(token: $token) {
      email
      pincode
    }
  }
}
    `;
export type VerifyActivationLinkMutationFn = Apollo.MutationFunction<VerifyActivationLinkMutation, VerifyActivationLinkMutationVariables>;

/**
 * __useVerifyActivationLinkMutation__
 *
 * To run a mutation, you first call `useVerifyActivationLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyActivationLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyActivationLinkMutation, { data, loading, error }] = useVerifyActivationLinkMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyActivationLinkMutation(baseOptions?: Apollo.MutationHookOptions<VerifyActivationLinkMutation, VerifyActivationLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyActivationLinkMutation, VerifyActivationLinkMutationVariables>(VerifyActivationLinkDocument, options);
      }
export type VerifyActivationLinkMutationHookResult = ReturnType<typeof useVerifyActivationLinkMutation>;
export type VerifyActivationLinkMutationResult = Apollo.MutationResult<VerifyActivationLinkMutation>;
export type VerifyActivationLinkMutationOptions = Apollo.BaseMutationOptions<VerifyActivationLinkMutation, VerifyActivationLinkMutationVariables>;
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

