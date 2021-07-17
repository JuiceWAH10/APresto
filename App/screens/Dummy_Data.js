import Shop from '../models/shop';
import Product from '../models/products';
import Reward from '../models/rewards';

export const shops = [
    new Shop(
        '1',
        '1',
        'Keitandkat Perfume',
        'Jacob St., Taytay, Rizal',
        'Perfumes'
        )
    ,
    new Shop(
        '2',
        '2',
        'Scrapyard Café & Restaurant',
        '45 Manila E. Rd., Angono, 1930 Rizal',
        'Pinoy Restaurant'
    ),
    new Shop
    (
        '3',
        '3',
        'Blugre Coffee Manila East',
        'Don Hilario Cruz, Taytay, Rizal',
        'Cafe'
    )
]

export const products = [
    new Product
    (
        'a1',
		'1',
        'Bulgari Extreme',
        150,
		200,
        'Perfume',
        'available'
    ),
    new Product
	(
        'a2',
		'1',
        'VS Vanilla Lace',
        150,
		200,
        'Perfume',
        'available'
    ),
    new Product
	(
        'a3',
		'1',
        'Perry Ellis Perfume',
        155,
		200,
        'Perfume',
        'available'
    ),
    new Product
	(
        'a4',
		'1',
        'Lacoste Black Perfume',
        175,
		200,
        'Perfume',
        'available'
    ),
    new Product
	(
        'a5',
		'1',
        'CK One Type Perfume',
        210,
		200,
        'Perfume',
        'available'
    ),
    new Product
    (
        'a6',
		'1',
        'VS Perfume',
        210,
		200,
        'Perfume',
        'available'
    ),
    new Product
    (
        'a7',
		'1',
        'Lacoste Black Perfume',
        210,
		200,
        'Perfume',
        'available'
    ),
    new Product
    (
        'a8',
		'1',
        'Hanging Diffuser',
        210,
	    200,
        'Perfume',
        'available'
    ),
    new Product
    (
        'a9',
		'1',
        'Black Suede',
        210,
		200,
        'Perfume',
        'available'
    ),
    new Product
    (
        'a10',
		'1',
        'JV Vien Scent',
        210,
		200,
        'Perfume',
        'available'
    ),
    new Product
	(
        'b1',
		'2',
        'Kalderetang Itik',
        200,
		200,
        'Ulam',
        'available'
    ),
    new Product
	(
        'b2',
		'2',
        'Daing na Bangus',
        150,
		200,
        'Ulam',
        'available'
    ),
    new Product
	(
        'b3',
		'2',
        'Pork Sisig',
        70,
		200,
        'Ulam',
        'available'
    ),
    new Product
	(
        'b4',
		'2',
        'Tapsilog',
        55,
		200,
        'Ulam',
        'available'
    ),
    new Product
	(
        'b5',
		'2',
        'Pork Steak',
        65,
	    200,
        'Ulam',
        'available'
    ),
    new Product
	(
        'c1',
		'3',
        'Durian Frappé',
        70,
		200,
        'Drinks',
        'available'
    ),
    new Product
	(
        'c2',
		'3',
        'Hot/ Iced Choco',
        60,
		200,
        'Drinks',
        'available'
    ),
    new Product
	(
        'c3',
		'3',
        'Americano',
        60,
		200,
        'Drinks',
        'available'
    ),
    new Product
	(
        'c4',
		'3',
        'Cappuccino',
        60,
		200,
        'Drinks',
        'available'
    ),
    new Product
	(
        'c5',
		'3',
        'Iced Lemon Tea',
        50,
		200,
        'Drinks',
        'available'
    )
]

export const rewards = [
    new Reward
    (
        'a1',
        '1',
        'Diffuser Oil',
        10,
        'Lovely smell for lovely suki',
        'available'
    ),
    new Reward
    (
        'a2',
        '1',
        'Perfume Collection',
        25,
        'Lovely smell for lovely suki',
        'available'
    ),
    new Reward
    (
        'a3',
        '1',
        'Perfume Pouch',
        25,
        'For your convenience',
        'available'
    ),
    new Reward
    (
        'a4',
        '1',
        'Perfume Organizer',
        25,
        'For your convenience',
        'available'
    ),
    new Reward
    (
        'a5',
        '1',
        'PHP100 Voucher',
        50,
        'Kaching!',
        'available'
    ),
    new Reward
    (
        'a6',
        '1',
        'PHP200 Voucher',
        75,
        'Kaching!',
        'available'
    ),
    new Reward
    (
        'a7',
        '1',
        'PHP300 Voucher',
        100,
        'Kaching!',
        'available'
    ),
    new Reward
    (
        'a8',
        '1',
        'PHP500 Voucher',
        250,
        'Kaching!',
        'available'
    ),
    new Reward
    (
        'a9',
        '1',
        'PHP1000 Voucher',
        500,
        'Kaching!',
        'available'
    ),
    new Reward
    (
        'a10',
        '1',
        '50% off Voucher',
        150,
        'Kaching!',
        'available'
    ),
    new Reward
    (
        'b1',
        '2',
        'Dinuguan',
        15,
        'INC',
        'available'
    ),
    new Reward
    (
        'b2',
        '2',
        'Fresh Buko Juice',
        10,
        '*toktok* kokonat',
        'available'
    ),
    new Reward
    (
        'c1',
        '3',
        'Adobo Cheesemelt',
        10,
        'Ulam',
        'available'
    ),
    new Reward
    (
        'c2',
        '3',
        'Chicken Pesto',
        10,
        'Mmmm',
        'available'
    ),
    new Reward
    (
        'c3',
        '3',
        'Tuna Cheesemelt',
        10,
        'Mmmmm',
        'available'
    ),
    new Reward
    (
        'c4',
        '3',
        'Ham and Cheese',
        10,
        'DepEd',
        'available'
    )
]