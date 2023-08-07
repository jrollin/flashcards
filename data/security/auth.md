---
id: security-auth
title: Authentication
description: Password, Session, Cookie, Token, Jwt, SSO, Oauth
topic: security
draft: false
tags:
---

## Explain differences between Identity, Authentication and Authorization 

* Identity: user claims to be John
* Authentication : user prooves that he is John
* Authorization: user is granted access to resources bases on privileges


## 3 factors to consider for authentication

When it comes to authentication, there are three factors to consider:

* Knowledge factors: something you know, such as a password
* Ownership factors: something you own, such as a device or phone number
* Inherence factors: something unique to you, such as your biometric features

Passwords fall under “something you know”. 
One-Time Passwords (OTP) prove that the user owns a cell phone or a device
Biometric authentication proves "something unique to you".

## Password Authentication

### HTTP Basic Access 

The credentials are encoded using the Base64 algorithm and included in the HTTP header field `Authorization: Basic`


### Session-Cookie 

A session ID is generated to track the user's status during their visit.
Users must still provide their username and password initially, after which the server creates a session for the user's visit.

Session cookies can be vulnerable to session hijacking attacks where an attacker can steal the session cookie and use it to impersonate the user. 
This can happen if the session cookie is transmitted over an unsecured network or if the website is vulnerable to cross-site scripting (XSS) attacks.

Session cookies can be difficult to scale to large numbers of users, as each session requires server-side storage of the session state. 
This can become a performance bottleneck as the number of users and sessions grows.

### Token-Based 

Instead of generating a session, the server issues a token and sends it to the client. 
The client stores the token in the local storage. 
Subsequent requests carry the token in the HTTP header for validation, allowing users to access protected resources for a specified period.


Differences between session and token authentication are:

* Token-based authentication doesn’t rely on cookies, so it can be supported when cookies are restricted. It can be used in mobile native apps, as well as in web applications, and it can mitigate the limitations of cookie-based authentication, including cross-domain access and CSRF attacks since tokens are not subject to the same restrictions as cookies.

* Tokens typically include a user ID, which is sent with each request, eliminating the need for the server to store token information in memory. This is why token-based authentication is often referred to as stateless authentication.


One limitation of basic token authentication is that tokens can be vulnerable to theft, especially if transmitted over insecure connections. 
Basic tokens may lack built-in mechanisms for expiration or revocation, which could lead to security risks if tokens are compromised.

### JWT (JSON Web Token)

Provide a standardized format for token creation and validation

JWT tokens consist of three parts:

* Header: Contains the token type (typ) and hash algorithm (alg), such as HMAC SHA256 or RSA.
* Payload: Includes seven predefined claims (not mandatory but recommended), public claims, and private claims.
* Signature: Created using the encoded header, encoded payload, and a secret.

If too much information is embedded in the payload, the token size may increase, leading to performance problems and increased bandwidth usage


## Passwordless Authentication

### One-Time Passwords (OTP)

Unlike static passwords, which can be reused, OTPs are valid for a limited time, typically a few minutes. 
This means that even if someone intercepts an OTP, they can’t use it to log in later. 
Additionally, OTPs require “something you own” as well as “something you know” to log in. 
This can be a cell phone number or email address that the user has access to, making it harder for hackers to steal.

### SSO (Single Sign-On)

Single Sign-On (SSO) is a user authentication method that allows us to access multiple systems or applications with a single set of credentials
The SSO process mainly relies on a Central Authentication Service (CAS) server. 


There are different protocols that facilitate SSO:

* SAML (Security Assertion Markup Language) is widely used in enterprise applications. SAML communicates authentication and authorization data in an XML format.
* OIDC (OpenID Connect) is popular in consumer applications. OIDC handles authentication through JSON Web Tokens (JWT) and builds on the OAuth 2.0 framework. More on this in the next section.

### OAuth 2.0 and OpenID Connect (OIDC)

OAuth 2.0 is primarily an authorization framework
OIDC is an authentication layer built on top of OAuth 2.0, enabling the verification of a user's identity and granting controlled access to protected resources.


OIDC provides user identity data in the form of a standardized JSON Web Token (JWT). 
This token contains information about the authenticated user, allowing the third-party application to create a user profile without requiring a separate registration process.


### Biometric Authentication

Biometric authentication uses unique physical characteristics of a person, such as facial features, fingerprints, or retinal patterns, to verify their identity

Biometric authentication should not be used as the sole authentication factor. Instead, it should be combined with other factors such as passwords or PINs, known as multi-factor authentication

### Multi-Factor Authentication (MFA)

Multi-Factor Authentication (MFA) is a security measure that requires users to provide more than one form of identification to access protected resource

MFA typically involves using two out of three authentication factors: 

* something you know (like a password or PIN)
* something you own (like a phone or token)
* something you are (like a fingerprint or face recognition)

### Time-based OTP

Two-Factor Authentication (2FA) using time-based codes, such as Google 2FA, relies on TOTP (Time-based One-Time Passwords)

The algorithms use a seed and a changing factor to generate the result


### Passwordless Authentication with FIDO (WebAuthn, CTAP)

Storing password on a server means possible password leak..

The basic idea is that the credentials (private keys) are owned by the user and managed by an authenticator. 
The application server only stores the public key, the private keys never leave the users’ devices.

FIDO enables users to sign in using passkeys across their devices with biometric or security key authentication.
These standards are developed by the FIDO Alliance and the World Wide Web Consortium (W3C)

FIDO works in the registration process. 

* Step 1: When the user registers on an application, the replying party (RP)’s application server sends a challenge to the RP client application using WebAuthn.
* Step 2: The client application forwards the challenge to an authenticator, using the selected authentication method.
* Step 3-4: The user approves the request using the selected authentication method. A new pair of keys is created, with the private key stored with the authenticator and the public key sent back to the RP client along with the credential ID and attestation.
* Step 5: The RP client sends the public key, client data, and attestation to the RP server. 
* Step 6: The RP server validates the response and registered the public key for the user.



> from sources : ByteByteGo
