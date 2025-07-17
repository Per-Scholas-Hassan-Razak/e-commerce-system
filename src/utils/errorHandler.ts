
export class CustomErrorClass extends Error {
  public readonly name: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.name = "Custom Error Class";
    this.statusCode = statusCode;
  }
}


export const handleError = (error: unknown): void => {
  if (error instanceof CustomErrorClass) {
    console.error(`CustomErrorClass ${error.message} (Status: ${error.statusCode})`);
  } else if (error instanceof Error) {
    console.error(`Unhandled Error ${error.name}: ${error.message}`);
  } else {
    console.error(`Unknown Error`, error);
  }
};