export function getFigmaEmbedUrl(url: string) {
  // If the user pasted an already correct embed url, we should still ensure hide-ui and sidebar=0
  let normalizedUrl = url.replace("embed.figma.com", "www.figma.com");

  // Force hide the sidebar and top/bottom UX panels to clean up the iframe presentation
  if (normalizedUrl.includes("show-proto-sidebar=1")) {
    normalizedUrl = normalizedUrl.replace("show-proto-sidebar=1", "show-proto-sidebar=0");
  }
  if (!normalizedUrl.includes("hide-ui=1")) {
    normalizedUrl += "&hide-ui=1";
  }

  // If the user pasted the entire embed string (https://www.figma.com/embed...)
  if (normalizedUrl.includes("figma.com/embed")) {
    return normalizedUrl;
  }
  
  // Otherwise, assume it's a direct figma link and wrap it in the embed url
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(normalizedUrl)}`;
}

// ==========================================
// CASE STUDY 1 FIGMA LINKS
// ==========================================

export const CASE_STUDY_1_LINKS = {
  // Case 1: Price List drill down hierarchy
  case1: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=174-56184&p=f&viewport=-191%2C-348%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=174%3A56184&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1",
  
  // Case 2.1: Mass Action
  case2_1: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=180-16112&p=f&viewport=-191%2C-348%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=180%3A16112&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1",
  
  // Case 2.2: Pricing grid
  case2_2: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=844-74268&viewport=4516%2C263%2C0.15&t=cpuyImBa8YmVw0NM-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=844%3A74282&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1",
  
  // Case 3: Multi-charge Setup
  case3: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=180-39164&p=f&viewport=-191%2C-348%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=180%3A39164&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1",
  
  // Case 4: Formula Management
  case4: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=183-80692&p=f&viewport=-191%2C-348%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=183%3A80692&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1"
};

// ==========================================
// CASE STUDY 2 FIGMA LINKS
// ==========================================

export const CASE_STUDY_2_LINKS = {
  // Case 1: Rate Plan Setup
  case1: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=184-127551&p=f&viewport=-191%2C-348%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=184%3A127551&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1",
  
  // Case 2.1: Negotiation CPQ
  case2_1: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=185-196672&p=f&viewport=-191%2C-348%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=185%3A196672&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1",
  
  // Case 2.2: Negotiation FOM
  case2_2: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=185-196003&p=f&viewport=-191%2C-348%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=185%3A196003&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1",
  
  // Case 3: Currency conversion setup
  case3: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=185-228733&p=f&viewport=-191%2C-348%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=185%3A228733&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1",
  
  // Case 4: Shipping charge setup
  case4: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=185-233988&p=f&viewport=-191%2C-348%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=185%3A233988&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1",
  
  // Case 5: Across list mass action
  case5: "https://www.figma.com/proto/1NlEmSIcdvEJYf9HIXu8Th/Portfolio?node-id=521-80841&p=f&viewport=-191%2C-348%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=521%3A80841&show-proto-sidebar=0&page-id=73%3A3&embed-host=share&hide-ui=1"
};
