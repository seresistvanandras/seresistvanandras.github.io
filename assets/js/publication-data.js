window.PUBLICATIONS = [
  {
    "year": 2026,
    "title": "A Tattered Cloak of Invisibility: Measuring Anonymity Loss in Railgun on Ethereum",
    "authors": [
      "Kanan Huseynov",
      "Ali Shahzaib",
      "István András Seres",
      "János Tapolcai"
    ],
    "venue": "Preprint",
    "pdf": "assets/papers/tattered-cloak-railgun-2026.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.25926"
      }
    ],
    "featured": true,
    "abstract": "We study behavioral privacy leakage in Railgun, an Ethereum mixer. Five heuristics use timing, address reuse, transaction-graph proximity, amount patterns, and combinations of amounts to link deposits and withdrawals. The analysis finds that these behaviors can substantially reduce practical anonymity even when the underlying cryptography remains secure.",
    "topics": [
      "Privacy"
    ]
  },
  {
    "year": 2026,
    "title": "Proof of Source of Funds: Efficient On-chain Provenance of Cryptoassets",
    "authors": [
      "Alireza Kavousi",
      "István András Seres",
      "Zhipeng Wang"
    ],
    "venue": "Preprint",
    "pdf": "assets/papers/proof-of-source-of-funds-2026.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2606.10172"
      }
    ],
    "featured": false,
    "abstract": "We introduce a zero-knowledge framework that lets users prove that cryptoasset deposits trace back to compliant sources without revealing intermediate transactions or addresses. It models ledger histories as temporal directed acyclic graphs and uses incremental proofs to make private, proactive compliance practical on Ethereum.",
    "topics": [
      "Cryptography",
      "Privacy",
      "Blockchain security"
    ]
  },
  {
    "year": 2026,
    "title": "Private Delegation of (Non-) Membership Proof Updates in Cryptographic Accumulators",
    "authors": [
      "Bence Soóki-Tóth",
      "Botond Glasz",
      "Alireza Kavousi",
      "István András Seres"
    ],
    "venue": "Preprint · IACR ePrint 2026/832",
    "pdf": "assets/papers/private-delegation-accumulators-2026.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2026/832"
      }
    ],
    "featured": true,
    "abstract": "This work develops private delegation methods for updating membership and non-membership proofs in dynamic RSA and bilinear accumulators. Clients can ask an untrusted server to update proofs while protecting the queried element, with constant-time online work independent of the number of set updates.",
    "topics": [
      "Cryptography",
      "Blockchain security"
    ]
  },
  {
    "year": 2025,
    "title": "Forking the RANDAO: Manipulating Ethereum’s Distributed Randomness Beacon",
    "authors": [
      "Ábel Nagy",
      "János Tapolcai",
      "István András Seres",
      "Bence Ladóczki"
    ],
    "venue": "ACM CCS 2025 · Distinguished Paper Award",
    "pdf": "assets/papers/forking-randao-2025.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2025/037"
      }
    ],
    "featured": true,
    "abstract": "We analyze strategic manipulation of Ethereum’s RANDAO and introduce forking attacks that remove honest blocks from the canonical chain. A model of validator strategies and measurements on Ethereum show how these attacks can bias randomness, increase unfairness, and disrupt users’ confidence in published blocks.",
    "topics": [
      "Blockchain security"
    ]
  },
  {
    "year": 2025,
    "title": "Bribers, Bribers on The Chain, Is Resisting All in Vain? Trustless Consensus Manipulation Through Bribing Contracts",
    "authors": [
      "Bence Soóki-Tóth",
      "István András Seres",
      "Kamilla Kara",
      "Ábel Nagy",
      "Balázs Pejó",
      "Gergely Biczók"
    ],
    "venue": "Preprint · IACR ePrint 2025/1719",
    "pdf": "assets/papers/bribing-contracts-2025.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2025/1719"
      }
    ],
    "featured": true,
    "abstract": "We introduce, implement, and evaluate three efficient smart-contract bribery mechanisms targeting Ethereum validators. They enable a briber to fork the blockchain by buying votes, incentivize validators to exit and increase an adversary’s relative stake, and create a trustless market for auctioning RANDAO manipulation power. We also provide an initial game-theoretic analysis of one bribery market.",
    "topics": [
      "Blockchain security"
    ]
  },
  {
    "year": 2025,
    "title": "poqeth: Efficient, post-quantum signature verification on Ethereum",
    "authors": [
      "Ruslan Kysil",
      "István András Seres",
      "Péter Kutas",
      "Nándor Kelecsényi"
    ],
    "venue": "ACM AsiaCCS 2025",
    "pdf": "assets/papers/poqeth-2025.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2025/091"
      }
    ],
    "featured": true,
    "abstract": "We implement and evaluate four post-quantum signature schemes in the Ethereum Virtual Machine, focusing on the gas cost of on-chain verification. The work compares direct verification with optimistic Naysayer verification and releases the poqeth implementation as an open-source library.",
    "topics": [
      "Cryptography",
      "Blockchain security"
    ]
  },
  {
    "year": 2025,
    "title": "Behemoth: Transparent Polynomial Commitment Scheme with Constant Opening Proof Size and Verifier Time",
    "authors": [
      "István András Seres",
      "Péter Burcsi"
    ],
    "venue": "Africacrypt 2025",
    "pdf": "assets/papers/behemoth-2025.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2023/670"
      }
    ],
    "featured": false,
    "abstract": "Behemoth is a transparent polynomial commitment scheme with constant-size opening proofs and constant-time verification, avoiding a trusted setup. The paper proves security in a generic group model and studies the trade-offs that make the scheme practical for selected parameter ranges.",
    "topics": [
      "Cryptography"
    ]
  },
  {
    "year": 2025,
    "title": "Towards Measuring the Traceability of Cryptocurrencies",
    "authors": [
      "Domokos M. Kelen",
      "István András Seres"
    ],
    "venue": "IEEE ICBC 2025 · Scholar’s 2022 preprint title: “Towards Measuring the Fungibility and Anonymity of Cryptocurrencies”",
    "pdf": "assets/papers/traceability-cryptocurrencies-2025.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2211.04259"
      }
    ],
    "featured": false,
    "abstract": "This paper defines a quantitative framework for measuring traceability and anonymity in cryptocurrency transactions. It combines absorbing Markov chains and Shannon entropy, then evaluates the measure on real transaction graphs, including a comparison of Bitcoin and Ethereum mixing behavior.",
    "aliases": [
      "Towards Measuring the Fungibility and Anonymity of Cryptocurrencies"
    ],
    "topics": [
      "Privacy",
      "Economics & measurement"
    ]
  },
  {
    "year": 2025,
    "title": "How (not) to hash into class groups of imaginary quadratic fields?",
    "authors": [
      "István András Seres",
      "Péter Burcsi",
      "Péter Kutas"
    ],
    "venue": "CT-RSA 2025",
    "pdf": "assets/papers/hash-class-groups-2025.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2024/034"
      }
    ],
    "featured": false,
    "abstract": "We examine how to sample uniformly distributed elements in class groups of imaginary quadratic fields without revealing their discrete logarithms. The paper identifies flaws in existing hash-to-class-group methods, demonstrates their consequences for protocols such as verifiable delay functions, and proposes and evaluates secure alternatives.",
    "topics": [
      "Cryptography"
    ]
  },
  {
    "year": 2025,
    "title": "The Legendre Pseudorandom Function as a Multivariate Quadratic Cryptosystem: Security and Applications",
    "authors": [
      "István András Seres",
      "Máté Horváth",
      "Péter Burcsi"
    ],
    "venue": "Applicable Algebra in Engineering, Communication and Computing · Google Scholar year 2025",
    "pdf": "assets/papers/legendre-prf.pdf",
    "sources": [
      {
        "label": "Publisher",
        "href": "https://link.springer.com/article/10.1007/s00200-023-00599-2"
      },
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2021/182"
      }
    ],
    "featured": false,
    "abstract": "This work relates key-recovery attacks on the Legendre pseudorandom function to solving multivariate quadratic systems over finite fields. It studies the resulting algebraic problem and builds applications including verifiable random functions and oblivious pseudorandom functions.",
    "topics": [
      "Cryptography"
    ]
  },
  {
    "year": 2025,
    "title": "Homomorphic Signature-based Witness Encryption and Applications",
    "authors": [
      "Alireza Kavousi",
      "István András Seres"
    ],
    "venue": "IACR ePrint 2025/443",
    "pdf": "assets/papers/homomorphic-witness-encryption.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2025/443"
      }
    ],
    "featured": false,
    "abstract": "We introduce homomorphic signature-based witness encryption, enabling aggregation of encrypted messages before a threshold of parties releases signatures. The paper constructs schemes from BLS, RSA, and Rabin signatures and develops a privacy-preserving variant.",
    "topics": [
      "Cryptography"
    ]
  },
  {
    "year": 2024,
    "title": "Atomic and Fair Data Exchange via Blockchain",
    "authors": [
      "Ertem Nusret Tas",
      "István András Seres",
      "Yinuo Zhang",
      "Márk Melczer",
      "Mahimna Kelkar",
      "Joseph Bonneau",
      "Valeria Nikolaenko"
    ],
    "venue": "ACM CCS 2024",
    "pdf": "assets/papers/atomic-fair-data-exchange.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2024/418"
      }
    ],
    "featured": false,
    "abstract": "The paper presents a trust-minimized protocol for exchanging a data file for payment atomically: the client receives the committed data if and only if the server receives payment. It introduces verifiable encryption under a committed key, gives two constructions, and demonstrates an Ethereum implementation.",
    "topics": [
      "Blockchain security",
      "Economics & measurement"
    ]
  },
  {
    "year": 2024,
    "title": "The Spatiotemporal Scaling Laws of Bitcoin Transactions",
    "authors": [
      "Lajos Kelemen",
      "István András Seres",
      "Ágnes Backhausz"
    ],
    "venue": "IEEE ICBC 2024",
    "pdf": "assets/papers/spatiotemporal-bitcoin.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2309.11884"
      }
    ],
    "featured": false,
    "abstract": "Using Bitcoin address and IP data, this study measures geographic and temporal patterns in Bitcoin transaction activity. It characterizes spatiotemporal scaling laws and proposes a Markov model that approximates observed patterns and geographic differences in network usage.",
    "topics": [
      "Economics & measurement"
    ]
  },
  {
    "year": 2024,
    "title": "Anonymity Analysis of the Umbra Stealth Address Scheme on Ethereum",
    "authors": [
      "Alex Márk Kovács",
      "István András Seres"
    ],
    "venue": "ACM Web Conference 2024 Companion",
    "pdf": "assets/papers/umbra-anonymity.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2308.01703"
      }
    ],
    "featured": false,
    "abstract": "The authors evaluate recipient anonymity and unlinkability in Umbra and its deployments on Ethereum, Polygon, Arbitrum, and Optimism. They develop heuristics that identify many real recipients and suggest practical countermeasures.",
    "topics": [
      "Privacy"
    ]
  },
  {
    "year": 2023,
    "title": "Cicada: A Framework for Private Non-Interactive On-Chain Auctions and Voting",
    "authors": [
      "Noemi Glaeser",
      "István András Seres",
      "Michael Zhu",
      "Joseph Bonneau"
    ],
    "venue": "IACR ePrint 2023/1473",
    "pdf": "assets/papers/cicada.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2023/1473"
      }
    ],
    "featured": false,
    "abstract": "Cicada uses linearly homomorphic time-lock puzzles to enable private, non-interactive on-chain auctions and voting. The work introduces an efficient puzzle construction and packing techniques for succinct ballot correctness proofs, and implements the protocols for the EVM.",
    "topics": [
      "Blockchain security"
    ]
  },
  {
    "year": 2023,
    "title": "ethp2psim: Evaluating and Deploying Privacy-Enhanced Peer-to-Peer Routing Protocols for the Ethereum Network",
    "authors": [
      "Ferenc Béres",
      "István András Seres",
      "Domokos M. Kelen",
      "András A. Benczúr"
    ],
    "venue": "arXiv:2306.15024",
    "pdf": "assets/papers/ethp2psim.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2306.15024"
      }
    ],
    "featured": false,
    "abstract": "ethp2psim is a modular simulator for evaluating privacy-enhanced message propagation and routing in Ethereum’s peer-to-peer network. It lets researchers compare privacy guarantees and tune protocol parameters for efficient and robust deployment.",
    "topics": [
      "Blockchain security"
    ]
  },
  {
    "year": 2023,
    "title": "Integrated Onion Routing for Peer-to-Peer Validator Privacy in the Ethereum Network",
    "authors": [
      "Domokos M. Kelen",
      "István András Seres",
      "Ferenc Béres",
      "András A. Benczúr"
    ],
    "venue": "Research paper",
    "pdf": "assets/papers/integrated-onion-routing.pdf",
    "sources": [
      {
        "label": "Source",
        "href": "https://info.ilab.sztaki.hu/~kdomokos/OnionRoutingP2PEthereumPrivacy.pdf"
      }
    ],
    "featured": false,
    "abstract": "This study examines whether an onion-routing design integrated into Ethereum’s peer-to-peer network can unlink validators’ on-chain identities from their IP addresses. It discusses Ethereum-specific design constraints, side channels, and spam protection.",
    "topics": [
      "Blockchain security"
    ]
  },
  {
    "year": 2023,
    "title": "Short Paper: Naysayer Proofs",
    "authors": [
      "István András Seres",
      "Noemi Glaeser",
      "Joseph Bonneau"
    ],
    "venue": "Financial Cryptography 2024 · Scholar year 2023",
    "pdf": "assets/papers/naysayer-proofs.pdf",
    "sources": [
      {
        "label": "Proceedings PDF",
        "href": "https://fc24.ifca.ai/preproceedings/39.pdf"
      }
    ],
    "featured": false,
    "abstract": "Naysayer proofs let a verifier check a compact proof that a submitted proof is invalid, which can be cheaper than verifying a valid proof directly. The paper gives constant-size, constant-time constructions for NP languages and practical examples including polynomial commitments, post-quantum signatures, and verifiable shuffles.",
    "topics": [
      "Cryptography"
    ]
  },
  {
    "year": 2022,
    "title": "The Effect of False Positives: Why Fuzzy Message Detection Leads to Fuzzy Privacy Guarantees?",
    "authors": [
      "István András Seres",
      "Balázs Pejó",
      "Péter Burcsi"
    ],
    "venue": "Financial Cryptography 2022",
    "pdf": "assets/papers/false-positive-fuzzy-detection-2022.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2109.06576"
      }
    ],
    "featured": false,
    "abstract": "We analyze privacy in fuzzy message detection, where clients receive cover messages alongside their real messages. The study examines recipient unlinkability, relationship anonymity, temporal ambiguity, and differential privacy, then uses real communication data to help select suitable false-positive rates.",
    "topics": [
      "Privacy"
    ]
  },
  {
    "year": 2022,
    "title": "Tutela: An Open-Source Tool for Assessing User-Privacy on Ethereum and Tornado Cash",
    "authors": [
      "Mike Wu",
      "Will McTighe",
      "Kaili Wang",
      "István A. Seres",
      "Nick Bax",
      "Manuel Puebla",
      "Mariano Mendez",
      "Federico Carrone",
      "Tomás De Mattey",
      "Herman O. Demaestri",
      "Mariano Nicolini",
      "Pedro Fontana"
    ],
    "venue": "arXiv:2201.06811",
    "pdf": "assets/papers/tutela.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2201.06811"
      }
    ],
    "featured": false,
    "abstract": "Tutela combines heuristics to cluster Ethereum addresses, identify potentially compromised transactions, and estimate effective anonymity sets for Tornado Cash pools. The paper describes the open-source tool and its analysis methods.",
    "topics": [
      "Privacy"
    ]
  },
  {
    "year": 2022,
    "title": "Security and Privacy of Cryptocurrency Applications",
    "authors": [
      "István András Seres"
    ],
    "venue": "PhD thesis · Google Scholar year 2022",
    "pdf": "assets/papers/phd-thesis-cryptocurrency-security.pdf",
    "sources": [
      {
        "label": "ELTE repository",
        "href": "https://doi.org/10.15476/ELTE.2023.074"
      }
    ],
    "featured": false,
    "abstract": "This PhD thesis studies security and privacy problems in cryptocurrency applications, including coin mixing, privacy-enhancing technologies, low-order assumptions, pseudorandom functions, fuzzy message detection, recipient anonymity, Tornado Cash, and cryptographic wills.",
    "topics": [
      "Privacy"
    ]
  },
  {
    "year": 2022,
    "title": "Private Signaling",
    "authors": [
      "Varun Madathil",
      "Alessandra Scafuro",
      "István András Seres",
      "Omer Shlomovits",
      "Denis Varlakov"
    ],
    "venue": "USENIX Security 2022 · Distinguished Paper Award",
    "pdf": "assets/papers/private-signaling-2022.pdf",
    "sources": [
      {
        "label": "USENIX",
        "href": "https://www.usenix.org/conference/usenixsecurity22/presentation/madathil"
      }
    ],
    "featured": false,
    "abstract": "Private signaling lets a sender post a message on a public bulletin board and privately alert only its intended recipient, without out-of-band communication or requiring the recipient to scan the whole board. The paper defines the problem in the UC framework and presents two server-aided protocols with constant work for sender and recipient.",
    "topics": [
      "Privacy"
    ]
  },
  {
    "year": 2021,
    "title": "A Note on Low Order Assumptions in RSA Groups",
    "authors": [
      "István András Seres",
      "Péter Burcsi"
    ],
    "venue": "Rad Hrvatske akademije znanosti i umjetnosti · Mathematical Sciences",
    "pdf": "assets/papers/low-order-rsa.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2020/402"
      }
    ],
    "featured": false,
    "abstract": "The note establishes weaker low-order assumptions sufficient for soundness of Pietrzak’s proof of exponentiation, relates low-order assumptions to factoring for a portion of RSA moduli, and describes how to certify RSA moduli without low-order elements.",
    "topics": [
      "Cryptography"
    ]
  },
  {
    "year": 2021,
    "title": "Blockchain Is Watching You: Profiling and Deanonymizing Ethereum Users",
    "authors": [
      "Ferenc Béres",
      "István András Seres",
      "András A. Benczúr",
      "Mikerah Quintyne-Collins"
    ],
    "venue": "IEEE DAPPS 2021",
    "pdf": "assets/papers/blockchain-watching-you.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2005.14051"
      }
    ],
    "featured": false,
    "abstract": "The paper studies Ethereum privacy through user profiling and quasi-identifiers. It evaluates graph-based, timing, and transaction-fee features for deanonymization, examines Tornado Cash usage patterns, and discusses a value-fingerprinting attack against confidential transaction overlays.",
    "topics": [
      "Privacy"
    ]
  },
  {
    "year": 2021,
    "title": "WabiSabi: Centrally Coordinated CoinJoins with Variable Amounts",
    "authors": [
      "Ádám Ficsór",
      "Yuval Kogman",
      "Lucas Ontivero",
      "István András Seres"
    ],
    "venue": "Cryptoeconomic Systems 2021",
    "pdf": "assets/papers/wabisabi-2021.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2021/206"
      }
    ],
    "featured": false,
    "abstract": "WabiSabi is a centrally coordinated CoinJoin protocol that uses keyed-verification anonymous credentials and homomorphic value commitments. It supports flexible transaction amounts while improving privacy and enabling use cases that are difficult with fixed-denomination CoinJoin designs.",
    "topics": [
      "Privacy"
    ]
  },
  {
    "year": 2020,
    "title": "On Blockchain Metatransactions",
    "authors": [
      "István András Seres"
    ],
    "venue": "IEEE International Conference on Blockchain 2020",
    "pdf": "assets/papers/blockchain-metatransactions.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/2004.08094"
      }
    ],
    "featured": false,
    "abstract": "This paper formalizes metatransactions, where users pay blockchain transaction fees in a currency other than the chain’s native token. It surveys existing approaches, proposes new designs, and analyzes their security, cost, and throughput trade-offs.",
    "topics": [
      "Blockchain security",
      "Economics & measurement"
    ]
  },
  {
    "year": 2020,
    "title": "Topological Analysis of Bitcoin’s Lightning Network",
    "authors": [
      "István András Seres",
      "László Gulyás",
      "Dániel A. Nagy",
      "Péter Burcsi"
    ],
    "venue": "Mathematical Research for Blockchain Economy · 2020",
    "pdf": "assets/papers/topological-lightning.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/1901.04972"
      }
    ],
    "featured": false,
    "abstract": "The paper measures structural properties of the Lightning Network, including degree distribution, centrality, clustering, and path lengths. It uses these results to discuss the network’s hub-and-spoke structure and possible implications for security and growth.",
    "topics": [
      "Economics & measurement"
    ]
  },
  {
    "year": 2020,
    "title": "CryptoWills: How to Bequeath Cryptoassets",
    "authors": [
      "István András Seres",
      "Omer Shlomovits",
      "Pratyush Ranjan Tiwari"
    ],
    "venue": "IEEE European Symposium on Security and Privacy Workshops 2020",
    "pdf": "assets/papers/cryptowills.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2020/283"
      }
    ],
    "featured": false,
    "abstract": "CryptoWills formalizes the problem of bequeathing cryptoassets while allowing the testator to retain control before death and preserving the privacy of beneficiaries. It defines security requirements and proposes protocols for static and dynamic assets.",
    "topics": [
      "Privacy"
    ]
  },
  {
    "year": 2019,
    "title": "A Cryptoeconomic Traffic Analysis of Bitcoin’s Lightning Network",
    "authors": [
      "Ferenc Béres",
      "István András Seres",
      "András A. Benczúr"
    ],
    "venue": "Cryptoeconomic Systems · 2019 preprint",
    "pdf": "assets/papers/lightning-traffic-analysis.pdf",
    "sources": [
      {
        "label": "arXiv",
        "href": "https://arxiv.org/abs/1911.09432"
      }
    ],
    "featured": false,
    "abstract": "The authors build a simulator to estimate Lightning Network transaction flows, routing fees, node incentives, and privacy. Their analysis finds weak economic incentives for many routing nodes and shows how short routes can reveal payment endpoints despite onion routing.",
    "topics": [
      "Privacy",
      "Economics & measurement"
    ]
  },
  {
    "year": 2019,
    "title": "ShareLock: Mixing for Cryptocurrencies from Multiparty ECDSA",
    "authors": [
      "Omer Shlomovits",
      "István András Seres"
    ],
    "venue": "IACR ePrint 2019/563",
    "pdf": "assets/papers/sharelock.pdf",
    "sources": [
      {
        "label": "ePrint",
        "href": "https://eprint.iacr.org/2019/563"
      }
    ],
    "featured": false,
    "abstract": "ShareLock proposes a practical privacy-enhancing mixing protocol built from multiparty ECDSA. It aims to deploy on existing cryptocurrency networks without a trusted mixer and without requiring changes to the base protocol.",
    "topics": [
      "Privacy"
    ]
  },
  {
    "year": 2019,
    "title": "MixEth: Efficient, Trustless Coin Mixing Service for Ethereum",
    "authors": [
      "István András Seres",
      "Dániel A. Nagy",
      "Chris Buckland",
      "Péter Burcsi"
    ],
    "venue": "Tokenomics 2019 · OASIcs 2020",
    "pdf": "assets/papers/mixeth.pdf",
    "sources": [
      {
        "label": "Dagstuhl",
        "href": "https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.Tokenomics.2019.13"
      }
    ],
    "featured": false,
    "abstract": "MixEth is a trustless coin-mixing protocol for Ethereum that uses verifiable shuffles without a trusted setup. The paper describes its security properties, on-chain and off-chain workflow, and an implementation that can also support decentralized shuffling.",
    "topics": [
      "Privacy"
    ]
  }
];
