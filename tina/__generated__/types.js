export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const EventPartsFragmentDoc = gql`
    fragment EventParts on Event {
  __typename
  day
  monthLabel
  titleIt
  titleEn
  venue
  ticketUrl
}
    `;
export const TestimonialPartsFragmentDoc = gql`
    fragment TestimonialParts on Testimonial {
  __typename
  quote
  author
  rating
}
    `;
export const SiteImagesPartsFragmentDoc = gql`
    fragment SiteImagesParts on SiteImages {
  __typename
  heroPoster
  homeStory
  experienceBody
  experienceMusic
  aboutStory
  aboutEarthpercentBadge
  eventsLocation
  eventsFirstTime
  blogCoverPillar
  blogCoverHome
  blogCoverPlanet
}
    `;
export const HomeTextPartsFragmentDoc = gql`
    fragment HomeTextParts on HomeText {
  __typename
  hero {
    __typename
    eyebrowIt
    eyebrowEn
    titleIt
    titleEn
    subIt
    subEn
    ctaPrimaryIt
    ctaPrimaryEn
    ctaSecondaryIt
    ctaSecondaryEn
  }
  whatWeDo {
    __typename
    eyebrowIt
    eyebrowEn
    titleIt
    titleEn
    leadIt
    leadEn
    bodyIt
    bodyEn
    linkTextIt
    linkTextEn
  }
  testimonials {
    __typename
    eyebrowIt
    eyebrowEn
    titleIt
    titleEn
  }
  newsletter {
    __typename
    eyebrowIt
    eyebrowEn
    titleIt
    titleEn
    bodyIt
    bodyEn
    emailPlaceholderIt
    emailPlaceholderEn
    buttonIt
    buttonEn
    noteIt
    noteEn
  }
}
    `;
export const EventDocument = gql`
    query event($relativePath: String!) {
  event(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...EventParts
  }
}
    ${EventPartsFragmentDoc}`;
export const EventConnectionDocument = gql`
    query eventConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: EventFilter) {
  eventConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...EventParts
      }
    }
  }
}
    ${EventPartsFragmentDoc}`;
export const TestimonialDocument = gql`
    query testimonial($relativePath: String!) {
  testimonial(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TestimonialParts
  }
}
    ${TestimonialPartsFragmentDoc}`;
export const TestimonialConnectionDocument = gql`
    query testimonialConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TestimonialFilter) {
  testimonialConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TestimonialParts
      }
    }
  }
}
    ${TestimonialPartsFragmentDoc}`;
export const SiteImagesDocument = gql`
    query siteImages($relativePath: String!) {
  siteImages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SiteImagesParts
  }
}
    ${SiteImagesPartsFragmentDoc}`;
export const SiteImagesConnectionDocument = gql`
    query siteImagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SiteImagesFilter) {
  siteImagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SiteImagesParts
      }
    }
  }
}
    ${SiteImagesPartsFragmentDoc}`;
export const HomeTextDocument = gql`
    query homeText($relativePath: String!) {
  homeText(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeTextParts
  }
}
    ${HomeTextPartsFragmentDoc}`;
export const HomeTextConnectionDocument = gql`
    query homeTextConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeTextFilter) {
  homeTextConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeTextParts
      }
    }
  }
}
    ${HomeTextPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    event(variables, options) {
      return requester(EventDocument, variables, options);
    },
    eventConnection(variables, options) {
      return requester(EventConnectionDocument, variables, options);
    },
    testimonial(variables, options) {
      return requester(TestimonialDocument, variables, options);
    },
    testimonialConnection(variables, options) {
      return requester(TestimonialConnectionDocument, variables, options);
    },
    siteImages(variables, options) {
      return requester(SiteImagesDocument, variables, options);
    },
    siteImagesConnection(variables, options) {
      return requester(SiteImagesConnectionDocument, variables, options);
    },
    homeText(variables, options) {
      return requester(HomeTextDocument, variables, options);
    },
    homeTextConnection(variables, options) {
      return requester(HomeTextConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
