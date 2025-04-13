
declare type SuccessfulResponse<T> = {
    message: "success";
} & T;

declare type ErrorResponse = {
    message: string;
    code: number;
} & T;

declare type ApiResponse<T> = SuccessfulResponse<T> | ErrorResponse ;