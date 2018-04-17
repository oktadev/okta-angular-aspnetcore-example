# ASP.NET Core 2.0 API with Angular 5

This example shows how to build a simple jogging times tracking app with an ASP.NET Core 2.0 backend API and an Angular 5 frontend.

Read [Build a Basic CRUD App with ASP.NET Core and Angular](URL???) to see how this app was created.

**Prerequisites:** [.NET Core 2.0](https://dot.net/core) and [Node.js](https://nodejs.org/).

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-angular-aspnetcore-example.git
cd okta-angular-aspnetcore-example
```

This will download a copy of the project.

### Create an application in Okta

You will need to create an OpenID Connect application in Okta to to perform authentication. 

Log in to your Okta Developer account (or [sign up](https://developer.okta.com/signup/) if you don't have an account) and navigate to **Applications** > **Add Application**. Click **Single-Page App**, click **Next**, and give the app a name you'll remember.

Change the Base URI to `http://localhost:4200`, and the login redirect URI to `http://localhost:4200/implicit/callback`. Click **Done**.

#### Server configuration

Set the issuer (authority) in `Startup.cs`.

**Note:** The value of `{yourOktaDomain}` should be something like `dev-123456.oktapreview.com`. Make sure you don't include `-admin` in the value!

```csharp
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    options.Authority = "https://{yourOktaDomain}.com/oauth2/default";
    options.Audience = "api://default";
});
```

#### Client configuration

Set the `issuer` and copy the `clientId` of the Okta application into the `app.module.ts` file:

```javascript
const config = {
  issuer: 'https://{yourOktaDomain}.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{clientId}',
  scope: 'openid profile email'
};
```

### Start the app

To install all of the dependencies and start the ASP.NET Core 2.0 Web API, run:
```
cd Backend/Backend
dotnet run
```

To install all of the dependencies and start the Anguar app, run:

```bash
cd Frontend/JoggingDiary
npm install
npm start
```

Note that in the `Frontend/JoggingDiary/src/app/workout.service.ts` you need to set the port of the API access point:
```javascript
private accessPointUrl: string = 'http://localhost:{MyPort}/api/workouts'
```

## Links

This example uses the following libraries provided by Okta:

* [Okta Angular SDK](https://www.npmjs.com/package/@okta/okta-angular)

## Help

Please post any questions as comments on the [blog post](URL???), or visit the [Okta Developer Forums](https://devforum.okta.com/). You can also email developers@okta.com if you would like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).
