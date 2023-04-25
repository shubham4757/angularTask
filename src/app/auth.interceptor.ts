import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Get the access token from wherever it's stored
    const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkJDRUI5OTBCMTBGRUE0NTQ5MDI3N0I4NTY2QUI4RDhBIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2NybS1oZWxpb3Mtc3RzLmF6dXJld2Vic2l0ZXMubmV0IiwibmJmIjoxNjgyMzk3NDE5LCJpYXQiOjE2ODIzOTc0MTksImV4cCI6MTY4MjQ0MDYxOSwiYXVkIjoiaHR0cHM6Ly9jcm0taGVsaW9zLXN0cy5henVyZXdlYnNpdGVzLm5ldC9yZXNvdXJjZXMiLCJzY29wZSI6WyJhcGkxIl0sImFtciI6WyJwd2QiXSwiY2xpZW50X2lkIjoicm8uY2xpZW50Iiwic3ViIjoiODdiODAyZWQtMzYyNC00YjE1LTg0M2QtYTgxMTVkYTVlZjExIiwiYXV0aF90aW1lIjoxNjgyMzk3NDE5LCJpZHAiOiJsb2NhbCIsImVtYWlsIjoibmlraGlsLmdhaWt3YWRAY2VudHJhbG9naWMubmV0IiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiI3V1dZVUJMUERBTlBCRjdHQlIzUFRYTEdUM0syVk9QQiIsIlVzZXJVSWQiOiI0NWZiNDBjYy1lNDgyLTQwOTktYjUzNC1mZGE4N2U3YzU4NTYiLCJVc2VyTmFtZSI6Ik5pa2hpbCAgIiwicm9sZSI6IkRpcmVjdG9yIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibmlraGlsLmdhaWt3YWRAY2VudHJhbG9naWMubmV0IiwibmFtZSI6Im5pa2hpbC5nYWlrd2FkQGNlbnRyYWxvZ2ljLm5ldCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwianRpIjoiNUY4MzJDQzcyNTlDRTU2QUNBRTdFRkZDMEFGQzU5QzcifQ.Dd9ckkCN2FaWhMsNTNgqm7r-W1cyaBW7Eiy7zHJ4A7RS1sfTGdx0HvqrQQHzzAoAJb5f8FZF9-yMtArkwbGHIOP-luWDuAHEAy7VPxl2mXbyna01F98tlmj7m4GTZQ-V_gwLbs9ZqUTzs-v3B8-BVxjxhHFIzTukiqzjyrjgphTdh7M69i4exHHPqskKJjzDdt6qLUrHDQXZBbq72S6cKKqAo9wN5W6E-AdHd2BX4sVP_AP7fFtakGMA2JxpYb56eILYpZRQgKht-pM4_-xIv40FDkwyRoox79oXIZQvlNU1dSv0ZPvbJVeuQ07br02Kv9n7R9qQh-mHhqB3WWgK5g';

    // Clone the request and add the access token to the headers
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
    });

    // Pass the cloned request to the next interceptor in the chain
    return next.handle(authRequest);
  }
}
