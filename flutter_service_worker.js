'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "16ad1158867a09f4ae5ee984ab434812",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fdcd4eb5aeadaf652ab7253cb3ac7a58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e97794678e0996576f6948794c691dc0",
".git/logs/refs/heads/main": "152d6b786155203eb31ae0c7f26faaf6",
".git/logs/refs/remotes/origin/main": "1708d357793fdd4253f50da652961fa9",
".git/objects/02/55fcaaef1bf56bbfa3a2d0ecfdaa25337b695a": "825e328f3659c9c48d5ac536e9c5f4fc",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/f948c5e55108c8e4b11aac6cb426571040dc3b": "91ff1670860060e98fc01fbf81ee9b39",
".git/objects/06/82c922e2809f9ccff95276b9591a6027093024": "32e1a55490b45e1afdce5f12887b49b0",
".git/objects/08/0268a4fe9facf2791a939f9dd1451b23195ef9": "bf348d49cc19a0bc3549c71e64d24a4b",
".git/objects/0a/1db34a66265763c358999730d31e62af095fee": "e1e6c2732565190e7e71a4ec6368d534",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/aa856fabc73a577fef9263b6f8a2f01f2ed374": "b7ef9e28c88e9689a763befd3336c180",
".git/objects/0c/fa4bbde058fde105fd5028265460dc7c75bf28": "3bd46f5e3934c3858614c5b6589a6515",
".git/objects/10/f9e2471f90a5fa6cd405f5e63485300770f022": "9006b031127d694e2d67bca1868ebfcb",
".git/objects/14/62aaa9b7a80b31898bdb9f9383486bbd9dbcc1": "6a60283ae63f128b42d3fb220cce2116",
".git/objects/19/707bffc3348601bdd998bb7a5fbf5f0beb8146": "d07dd98b7c9770f6a93f3c73808e05c0",
".git/objects/1c/61d7f224c606acda7f4411cb191031f3ca392a": "a84dc9b598cb32d4fc1ab223e7422b6a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/997360cad3f0dbf433dfd3044eadeac79e23c9": "e1da8f8eefcd712390680db4561ecfa6",
".git/objects/21/669468130da6689d857a7ba3c0cd302ee0054b": "ae2adc735906cddf9e4cb80668ce9bce",
".git/objects/21/f3a9ca7cb551881f11f2ab892c4c68e0b25b93": "dd0a21b418686e62fcb0cb41da1de7fe",
".git/objects/23/66f6c909315a36a5ac0cc698940b7f41f0b057": "2df76cce39e45eabb707de76d172f61c",
".git/objects/25/a8b468c8c53b7646e3d8259b477f1d714556a6": "c7c6b8c932b072b0d8a5f047ee172d4f",
".git/objects/25/d0d82930741fc2b0daa72ac2f6e5afe2a96c79": "31e1a772d2c1fc3c80e092ac776143f2",
".git/objects/26/96f16c966b6666d6aba6176f9a1dbf510df0d1": "723e443f8e7bb7cf57e0b1c8aae5fceb",
".git/objects/26/ae44c9ed322d2c908788e5aed989b27a3aba69": "a399002148fdcf8cf5f4591ce2d90db4",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/29/6cb0f65b3ae2c8e9776af8cd888ef2cb82936d": "4da97237d2d9bb5a5c1005993b9545e3",
".git/objects/2a/48f33346e302ef5b17b5c27ba9808aaa2e9cf5": "2b9f8e039a0d340292cca30ec3e22195",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2e/6c66aaec1059f45d10df84e0fb4bffcb5ac6b9": "cef16bf6aaa607a0e764db3daef59a95",
".git/objects/31/d26bee2ee5dad40aca8b824908bb2ddb9d8cb4": "ce13fd8689a73fae85cf69bc4fcb69b7",
".git/objects/32/49c9e978fd6cb34edcb969b6a39492f9f0fcc3": "0a5872ce15a5355a65b8b668ea222eee",
".git/objects/32/5e6324891a53d35767ff695b5c0a86d38dc4fa": "6ed62dc6c91233cd1891c9f903990fce",
".git/objects/34/ad33bf128e5de23c72812cd7930f9d630d3543": "9e6d2ca81d9c4f5e723f008d785edb23",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3f/10d2001ab631a12832c2dd977ec981d3b40ab5": "dab762266f94d13a225d6134da8780a0",
".git/objects/40/9bec8defa4bde087ffa11af3009742172510f2": "1b2d25fe9f4eb63152d63d393a924744",
".git/objects/43/1a12fc2aafdc61fb8bee517e2c7d98b1dd6ecf": "7543c24a69b79352437f542af33150ed",
".git/objects/45/61b86a1e8f2aef17fffaa1763121bc45f9a231": "244861d6e31c9c16c0ffc6e580893aea",
".git/objects/46/12caf4cbee7fd5068b4f891398f518dfb14b15": "70cea585c03b9221a8e2913d70038e0a",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/4a/98dc1d808ba1a9be419d3f7b5e2593a4d02cb6": "78d379308ecccca21c5f11c190595040",
".git/objects/4a/f12f3fb865e07bfc2dfb8dcd97754c1280ceda": "21bec6b1d9831686cb11559375208997",
".git/objects/4b/b92f7130c4723a46fef45e47e5f8fad762b173": "02940e52bbd8252b404681d4a17286f8",
".git/objects/4c/f163bfe2478d5bcff267b559de41710d278af7": "f3902f948291f941a9e683f3f29542f0",
".git/objects/4e/7bf14b68f75161ac098840a712434f4a629783": "6a653b04841a789e6767135e55cf862d",
".git/objects/4f/a54932cc3ae6a001d40ed1c90b6b55c2fa4b01": "a3c17671eecf026e8b3b9c3183402731",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/bccf61c5ab93989ea8cee76ef17d3edb92e487": "4e4caee849cf9832960c14cbac4c81f0",
".git/objects/51/d2186b21e130e033ffcdd0da0cc54150b0ba25": "230ead26d6ea210f384413d917212dc8",
".git/objects/52/ef7d754302bf3cd7f11a357e3cb59b2d38d14c": "ad18181fa7f17311a98ab1a2fd307b07",
".git/objects/54/70762e4d31c273bae6199fa31c65a45c128a9a": "72b07d90ea411983d00b821ba59d46cd",
".git/objects/55/3fdbd485068c4bc0eb2a49103ddf5da815b34b": "f9512717f31386f9f59bf3816636fa54",
".git/objects/55/79f9d460d1bc7f5fe54edacd805166f14c5abd": "de2b0d9a90c303715d6f0124ae873f15",
".git/objects/56/4f8356a6439bf337cc19dfd5d4d9b25e4ced08": "048a16d24696de8f9483d9fd5eda460f",
".git/objects/57/3e67da8ade96ad7de30f3145a19ed02340cb15": "c6b0fe8ca46308dec028b4098941e712",
".git/objects/58/5b1b0a8a5feaad66d90ade77391f73942b8875": "d8bd5029fd871b0801a3d0d94288d148",
".git/objects/5b/d1f44359d0c06b283089b47be1bb621804568d": "11cbcd0f3b72aea4d39f50c1e3a3d84b",
".git/objects/5d/81b8c761e9de351dee3cd7471f6acb0e781464": "81afc6c430aed8b461423e8e4c85d9e0",
".git/objects/5e/d43a994ee3e93d4cf250579ba41b31f114aaeb": "ef65ce8a7177a4fe69f3b9415ff3ca55",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/14113992a654fd8365d8f29babff4efaff8162": "2ef978e815cacbe8f1a118000b17eac9",
".git/objects/65/0fa5f8fb95b1f0f74cd437f0dca28bea0e6d45": "0db866107a102ee69b7ad2ee7a897e08",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6b/c00c4d406a6e0a5acabf26bbec1e0f58cc0c27": "0689a272242686131f7c3e4098385aa0",
".git/objects/6c/0f103a775c5eaa07853af1a662e03f556eb808": "dc51e800882e2e20b1c200afb949b19c",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/6d6bad87d1f42cd044f347d8798bf381b2fad1": "6c603364dd8dc323f7956157a1e18332",
".git/objects/6e/4dd8748c31c21967e465904631b3fe34d9d28b": "97dcc8d1b3c4a283dcfc7c57ec87ce32",
".git/objects/6e/aa3066a8a230d5f6f0682ad96dd72995c9f5f7": "37ccc1c08598f7c56e6531da4435783e",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6f/acf0364cb5dd2b936dfeef730be69904468566": "33c1c76d1996a90d197bea09b9a50c49",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/5096c9504dd1a8190e1a7b0c915ed17bcb23d4": "ea11f0f57b36e215d13ff986152f96da",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/75/1a6492e947e32622e577d9ad73ee19c7ffb50f": "b9a2e820e585385dcc640904a75be8cf",
".git/objects/75/96ebaf37971d0320219855dc7651dadc16e707": "6e25107f76cf92f6ef5662fa3174fa73",
".git/objects/76/4c93cba8a8874517e1cca4698fe2188d2d42cf": "58c8f949af5d037dc8e6ead5568b0a03",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/78/1ab2ba2a51f026185ec43fcfd7b7194896d510": "2287d24b208dfa148fbad1dc75269118",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/7c/3dfce9adf6a8992bc047898c4402e70629ebb2": "7f60f8cf6cb1405aa03a9b27ed965995",
".git/objects/7e/298cb0c0047e01c6bf31f9ed087cfd51b368c3": "f2148c8dd025763c074e9c1cb23efa6f",
".git/objects/7f/4131ce7aa75733a51b7035ade7fe1d91f607ac": "07a9f8d5171b64159c504efe0537515f",
".git/objects/80/5134f32d5123482087ccb56cfc81d30eec8288": "2d3f5d7bc48b921a317756f9ad8a70d6",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/82/fcdf61f390b5e27fb9953a8f70af5978abc4b4": "3edbb359a8a5494ce72cd4be090b7253",
".git/objects/84/73a19ccd2c7b4614d9e045bfd7564833b4ca03": "94fdeae2137c578eb91c6810ee3ffa20",
".git/objects/87/7a11dd260b5a86d243fbec458439a2aeec1270": "282cd3324a6ca9af2280a44f732ff8b3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/283193e216dcafc61b1a75c82d7768fa264ff0": "4a66cf9d0e263e8edca7589ceb241ef4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/20c5be1cd3d65123fcffaf064484566360ca51": "cf88e5ce89e88b14170a2604d8e946dd",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/4547dfe955c18c73899f1080423c802f6f874b": "3a5dd3504fc8b53d2bd977b4fe1a2d8f",
".git/objects/8f/865a1dab80b1214c03db3e23f9828d5c3aa736": "22cb70a5689be54693e12366cf04ec4c",
".git/objects/93/5439478ed9c3cbcbec274a393e9dfc1a61de8c": "cdfa7fa1f09f5dcfa96ff8f4c9a2931b",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/99/9a89180478519b22af700a5f568be8123eb9c3": "17991429a9a9505275f551ba15703cb9",
".git/objects/9a/2f4bdbf5f1f4184eb7e248640a994f8acdaa69": "2069d2df5660ed10e8bdd450c94fd3cf",
".git/objects/9e/be22c75ce31659f7e61c5907e4283a645171f7": "a37c87055ef6582e89fbd493c7443c56",
".git/objects/9f/8062a713c4af5045e82ba34633d7f66d453c73": "e10ac3156a3c3788518175c752fcc806",
".git/objects/9f/e02ba2c0aa610e79e0b856cfe80fa0b2e88692": "c031bd8d3a3e37606476f60842a9eb1a",
".git/objects/a0/cdd2ff2f5d935b5accbed518dc080d9f5218f9": "36bce1dc7e80978961f065e5bee7214a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a9/a40dc1a155f644b8c90bc32b15cb95d67971c3": "7e3122c8b634606dbd3b601cd818c7f7",
".git/objects/ac/b7ec364944d9fe8d85972558ce1e3e2589ade0": "28527e7915d6e1c349f88927e9c05f63",
".git/objects/af/007942ab593e1fd360836902fc16ea0bbd98cc": "32770480380cbc8ce9ffc4a11216bf88",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b6/1af64594271e3c5d08bf3cf8f1cfd8e0702e24": "be3a1a533c12f171381537aca6130ee1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ad1ed03a78713c13d94fd060eba1cd195c2f3d": "78daa4d07b1635efa9af88e570fdd2d6",
".git/objects/b8/86900cbeb15189bc5748bc94b0336e030ca01f": "fba817b6034b69c55b3d25b67899d220",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ec48596088290dbff9f55ed380d114b374d25a": "b2bf386e8bc1ed74bd93f472804ae54f",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/3672803070fa0ae8e89be56e82df944330e48c": "e93e899fcc87a2762fb9731e68684862",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c0/13b1abb6c8418a9d805a0e3408579be541f257": "155f69623a31e47ed8f1c1ceb1a01b15",
".git/objects/c1/2d609632b8988806e6d6657501401460493dac": "82f81eb3975d91482b44ead9dc7dc7a2",
".git/objects/c7/83ecea668e3774e29ceab9f3a3822525edb636": "9a178c9c275d330b970b45b12f2a005d",
".git/objects/cc/55905ffe185d5cbf5246e0953388f3199e8eb7": "a24e687cfd1cbbc7998841a67eda5252",
".git/objects/cf/30df965ac8ab9d7a1ace0f037c4d6dd184db98": "cdd4e6ddbea837f6bc47729949a66885",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/02d4dc71e2f90924f06d2fcb50653b46ba2db5": "d9dbc2e5f80fd51f9e980e852600c797",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/05e15beee9dc589c77f8b5c5fe32ad6a333414": "1849cb7586ce84fe962c18328e50e397",
".git/objects/d8/caccef8608bef1dabca75257c8c166cecfe75d": "85ec9f38d4a2179c20133668ba966c31",
".git/objects/d8/f42b22ec2d242ea146d2cda490cb192c114e47": "261f67aceb49cb4a0de02b9cdbb98996",
".git/objects/da/0526415f7eb2fcbf5da2b143edf73d0977ee0a": "7cd94f8dcba2026e235b4d1590f70bf9",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/db/62a105df0e5b308c6f516ff8323cc697dfa03b": "91830e013e3534654e2de2bf39466a79",
".git/objects/dd/f61e2b0b89515994b72555013b3f585770f565": "9141cf76ba5faca2de4d3438d143618d",
".git/objects/e1/e2b45575bf2368688d49113ad14482b9bfc86d": "1d85e7038338be0d7d7676463423d051",
".git/objects/e2/6c1cd350870002012b12345aa8999228806332": "c3ee09e19e7dc55a0d1dd92c14a4cfcc",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/e4/bd919c05e79e419cdc5f429cd88aa265ed3b65": "f5da0fb0a0c7563d3003f64d973d7a44",
".git/objects/e4/d3e149f1428f32e15df89bc896e575d9a30be4": "8f5a5796819d5e7dfc7c63bfc16be761",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/f6/50d48f265de8503d0b7e49709ca78d0e008210": "47cb3dfd6e64456f91c5b60ec6abf141",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/refs/heads/main": "1bfaf4689f594b958533a80dd2500f37",
".git/refs/remotes/origin/main": "1bfaf4689f594b958533a80dd2500f37",
"assets/AssetManifest.bin": "129ee18341c157542a0750f4b1aab775",
"assets/AssetManifest.json": "aee8e24a081b0786f23a357bd8940b3e",
"assets/assets/ai_tip_image.png": "79fd67c4c189a542e9cd505923daf593",
"assets/assets/bgd.png": "2ba4ce62fad06d5ad2259bd5ea27a4b1",
"assets/assets/creta-crayon.png": "8b1a33d2be10dec9a95ff7bd76057a2f",
"assets/assets/creta-digital-art.png": "83bda569ea3be2963ccf76775a95f5d5",
"assets/assets/creta-drawing.png": "9be6ecdc86b6240b23d97bdae7d6505a",
"assets/assets/creta-illustration.png": "cdd42fa516bcd3647e12b7d7df3cefc3",
"assets/assets/creta-oilpainting.png": "efa3012c06d044af70dae8d29abc57c4",
"assets/assets/creta-orientalpainting.png": "74332d0ead5fcb395e52c1d5c8f7b81a",
"assets/assets/creta-outlinedrawing.png": "9a6f7953d9260f91c7c6ef1a079a921a",
"assets/assets/creta-photo.png": "484dae169f5f9d46acc241b380853e26",
"assets/assets/creta-popart.png": "7d12a7faf31326e9250b79c8767254aa",
"assets/assets/creta-printmaking.png": "f82315d66f95eec8c60a08e967dfe925",
"assets/assets/creta-sketch.png": "b9b7da2f7c1156c1673ab753d53fb918",
"assets/assets/creta-watercolor.png": "7aceb96c30dc503ac48240d9b7e5fedf",
"assets/assets/creta_default.png": "cf1eb68da282f005cc5cbf8a6c3d9d8c",
"assets/assets/creta_logo_blue.png": "bafadae9d8eddb17987e77ba49c0d13b",
"assets/assets/delete.svg": "290daba2785fb1146c928c8b3d3a7762",
"assets/assets/delete_content.svg": "f1958da0b63de6e70f78414664b93022",
"assets/assets/delete_frame.svg": "d67f01a11018305a3ee4e98a944a05c6",
"assets/assets/google__g__logo.svg": "ea735e62c31af39012853c932d74375a",
"assets/assets/grid.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/assets/hycop_config.json": "4001e5e03502bcc9420aeef8212a7b3f",
"assets/assets/logo_en.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/assets/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/assets/no_image.png": "05434b1b716ba721f3015a2393b9fe80",
"assets/assets/tipImage-1-1.png": "fe0ec67588b071f5b7980c4d88c2efd7",
"assets/assets/tipImage-1-2.png": "006a497f79eaf60cb8f893de92e0bf6e",
"assets/assets/tipImage-1-3.png": "e87acefb77b521ee366b127cb94ade72",
"assets/assets/tipImage-1-4.png": "eabb8c3ac2bfa97e7db7f12af542d258",
"assets/assets/tipImage-2-1.png": "b17e6a723043acab6c4cc0675c1ba1f6",
"assets/assets/tipImage-2-2.png": "9983ccb385d7ddf1ae5740768fe8b4bd",
"assets/assets/tipImage-2-3.png": "5aea6da297886bdb6e8633854645fa9f",
"assets/assets/tipImage-2-4.png": "7ad6eed05d40d74e2d4ca544ad87b963",
"assets/assets/youtube.png": "c647da897d59668d1c5d18751e7de2aa",
"assets/FontManifest.json": "0c25a05df9f6b6f02d7facccb3c817a4",
"assets/fonts/Jua/Jua-Regular.ttf": "f32585404eaefb4f771d6ec0d0492682",
"assets/fonts/Macondo/Macondo-Regular.ttf": "cea32bd04bb9981d8dd78e509ac1cccd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Nanum_Gothic/NanumGothic-Bold.ttf": "4fa4ea43222779743fc8cd4b4835d04e",
"assets/fonts/Nanum_Gothic/NanumGothic-ExtraBold.ttf": "4b1b824d86d866cb8245accebe324b62",
"assets/fonts/Nanum_Gothic/NanumGothic-Regular.ttf": "3cbe9257e888255cb2dad0d8a80a7759",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Bold.ttf": "9eaa2e637c6efe5b4e37b7626e65b47c",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-ExtraBold.ttf": "a2dcb7090ec61a328c2d518342cdc568",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Regular.ttf": "afce7d51531785bfad8c666d6ee2a9b7",
"assets/fonts/Nanum_Pen_Script/NanumPenScript-Regular.ttf": "6238324b9cfd31534885a47e8b07231e",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf": "aef8424b7c9ece17f01cbc8618e4723b",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf": "b59ac7cf449e57469daf2480fafbddf4",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf": "89816c0e22baa4f81a196a1c3b61bf46",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf": "de132efeffa48aef0bf5bdfe1c4602f4",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf": "913f146b0200b19b17eb4de8b4427a9c",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf": "5dac92efb94655ca5331df2505f3428a",
"assets/fonts/Pretendard/Pretendard-Black.otf": "a0dae583b0afcf6f07f170fe75c07642",
"assets/fonts/Pretendard/Pretendard-Bold.otf": "0c28c1f5ba0bcdfb02688cc77186c89d",
"assets/fonts/Pretendard/Pretendard-ExtraBold.otf": "44ba46bad2096044f462bc5ec1d28915",
"assets/fonts/Pretendard/Pretendard-ExtraLight.otf": "fc5c7c8047bbdaf09f8813d1fe3165ac",
"assets/fonts/Pretendard/Pretendard-Light.otf": "d39b4dd5b80382ea3b767f805de6ee92",
"assets/fonts/Pretendard/Pretendard-Medium.otf": "c40957def7f8380b7ab0aa28e594ab1d",
"assets/fonts/Pretendard/Pretendard-Regular.otf": "d1e2411be87335a335df2d824eacf3f0",
"assets/fonts/Pretendard/Pretendard-SemiBold.otf": "5c328494b7eabdb6942b76d5fb4d48e0",
"assets/fonts/Pretendard/Pretendard-Thin.otf": "1095c717674530e8a42bd9d4c4aede43",
"assets/NOTICES": "cdd302f88d49483dfad7a1b010b28a1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/flutter_rte/assets/document.html": "0e6aaa8fb61c82fb779aa1998ced6fac",
"assets/packages/flutter_rte/lib/assets/document.html": "0e6aaa8fb61c82fb779aa1998ced6fac",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e1c75f5826008b73ea31b4b658da1c6",
"/": "1e1c75f5826008b73ea31b4b658da1c6",
"js/screenshot.js": "0b011cf26143e3110e1209294a9ad4db",
"main.dart.js": "839b2627e9075eebbb560ecf907c3e53",
"manifest.json": "10c4c2a8c89b772ff830f2ce83fa630d",
"version.json": "534c1d2f16718b3387f30c1432052801"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
