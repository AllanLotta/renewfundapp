import { FundPreview } from "@app/models/fund";

export type FundProps = Omit<FundPreview, 'id'>;
