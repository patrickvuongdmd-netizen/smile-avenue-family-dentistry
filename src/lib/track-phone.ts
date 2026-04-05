/** Push a GTM dataLayer event when a tel: link is clicked */
export const trackPhoneClick = (phoneNumber: string) => {
  (window as any).dataLayer?.push({
    event: "phone_call_click",
    phone_number: phoneNumber,
    page_location: window.location.pathname,
  });
};
