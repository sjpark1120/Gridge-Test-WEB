class BusinessModel {
  private readonly _id: number;
  private readonly _title: string;
  private readonly _description: string;
  private readonly _coverImageUrl: string;
  private readonly _detailImageUrl: string;

  constructor(
    id: number,
    title: string,
    description: string,
    coverImageUrl: string,
    detailImageUrl: string
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._coverImageUrl = coverImageUrl;
    this._detailImageUrl = detailImageUrl;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get coverImageUrl(): string {
    return this._coverImageUrl;
  }

  get detailImageUrl(): string {
    return this._detailImageUrl;
  }
}
