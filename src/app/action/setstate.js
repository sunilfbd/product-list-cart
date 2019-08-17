const defaultData = {
	"productsDetails": [{
			"product-id": "001",
			"url": "http://www.productid001.com",
			"title": "Lorem ipsum dolor de amet",
			"shortDescription": "Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem sit amet",
			"image-path": "/images/prod-image.jpg",
			"is-add-to-cart-allowed": "true",
			"product-cta-label": "add to cart",
			"price": "199.99"
		},
		{
			"product-id": "002",
			"url": "http://www.productid002.com",
			"title": "Lorem ipsum dolor de amet",
			"shortDescription": "Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem sit amet",
			"image-path": "/images/prod-image.jpg",
			"is-add-to-cart-allowed": "true",
			"product-cta-label": "add to cart",
			"price": "399.99"
		},
		{
			"product-id": "003",
			"url": "http://www.productid003.com",
			"title": "Lorem ipsum dolor de amet",
			"shortDescription": "Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem sit amet",
			"image-path": "/images/prod-image.jpg",
			"is-add-to-cart-allowed": "false",
			"product-cta-label": "add to cart",
			"price": "599.99"
		},
		{
			"product-id": "004",
			"url": "http://www.productid004.com",
			"title": "Lorem ipsum dolor de amet",
			"shortDescription": "Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem sit amet",
			"image-path": "/images/prod-image.jpg",
			"is-add-to-cart-allowed": "false",
			"product-cta-label": "add to cart",
			"price": "799.99"
		},
		{
			"product-id": "005",
			"url": "http://www.productid006.com",
			"title": "Lorem ipsum dolor de amet",
			"shortDescription": "Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem sit amet",
			"image-path": "/images/prod-image.jpg",
			"is-add-to-cart-allowed": "true",
			"product-cta-label": "add to cart",
			"price": "899.99"
		},
		{
			"product-id": "006",
			"url": "http://www.productid006.com",
			"title": "Lorem ipsum dolor de amet",
			"shortDescription": "Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem sit amet",
			"image-path": "/images/prod-image.jpg",
			"is-add-to-cart-allowed": "true",
			"product-cta-label": "add to cart",
			"price": "699.99"
		},
		{
			"product-id": "007",
			"url": "http://www.productid007.com",
			"title": "Lorem ipsum dolor de amet",
			"shortDescription": "Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem Lorem ipsum dolor de amet lorem sit amet",
			"image-path": "/images/prod-image.jpg",
			"is-add-to-cart-allowed": "false",
			"product-cta-label": "add to cart",
			"price": "799.99"
		}
	]
};

export function setstate() {
	return {
		type: "SET_STATE",
		payload: defaultData
	}
}