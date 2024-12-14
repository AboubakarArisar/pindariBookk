import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "woifcnuu",
  dataset: "production",
  token:
    "skG3llgujCflTLBfETQKnyPvLxx8z4gxsRuKMzOUj21AKmkvepB2r7OWKEnCUsxXChmMLSnqfZ9GHN0cDm20JNqJCzbz9HuD34XNXwljnYXe2NXqt2gclILFggwavMnzMLazjGTTRnNqjjXgxuNpSKRXqMBC3tphMeK0riGSJmkRCG8mkMrO",
  useCdn: true,
});

export default client;
