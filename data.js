var APP_DATA = {
  "scenes": [
    {
      "id": "0-entradas-de-linha-69-kv",
      "name": "Entradas de linha 69 kV",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.761413901988094,
          "pitch": -0.020482996095658734,
          "rotation": 5.497787143782138,
          "target": "1-rua-gerador"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2567427630333157,
          "pitch": -0.4082839396739182,
          "title": "TGSY4-01",
          "text": "Text"
        },
        {
          "yaw": 1.5735956411367829,
          "pitch": -0.426938277564906,
          "title": "TGSY4-02",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-rua-gerador",
      "name": "Rua (Gerador)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.057425189141115496,
        "pitch": -0.0511779011861524,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -0.06415483725127835,
          "pitch": 0.15203873621897657,
          "rotation": 0,
          "target": "2-rua-gerador---casa-de-comando"
        },
        {
          "yaw": -2.2069123052333772,
          "pitch": -0.04179671277303321,
          "rotation": 7.0685834705770345,
          "target": "0-entradas-de-linha-69-kv"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4070749819129578,
          "pitch": -0.17113755222739968,
          "title": "Gerador",
          "text": "Características do gerador"
        }
      ]
    },
    {
      "id": "2-rua-gerador---casa-de-comando",
      "name": "Rua (Gerador -> Casa de Comando)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5788756831206285,
          "pitch": 0.11261058162627435,
          "rotation": 0,
          "target": "1-rua-gerador"
        },
        {
          "yaw": 1.621231960451066,
          "pitch": -0.0356063676776639,
          "rotation": 0,
          "target": "3-rua-casa-de-comando"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-rua-casa-de-comando",
      "name": "Rua (Casa de Comando)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12804496275603405,
          "pitch": 0.010741718758731977,
          "rotation": 0,
          "target": "4-bancos-de-capacitor"
        },
        {
          "yaw": 3.0940506135285286,
          "pitch": 0.024945920707633462,
          "rotation": 0,
          "target": "2-rua-gerador---casa-de-comando"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bancos-de-capacitor",
      "name": "Bancos de Capacitor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5001541387020971,
          "pitch": 0.1026527888587232,
          "rotation": 0,
          "target": "5-entrada-rea-de-risco"
        },
        {
          "yaw": 2.953910719610194,
          "pitch": 0.05799004620474335,
          "rotation": 0,
          "target": "3-rua-casa-de-comando"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5873422800459274,
          "pitch": -0.08334702517250214,
          "title": "BC1",
          "text": "Tensão nominal: 13,8 kV<div>Potência: 3 x 3,6 MVAr</div>"
        },
        {
          "yaw": -0.13177833947176865,
          "pitch": -0.10377284840004641,
          "title": "BC2",
          "text": "Tensão nominal: 13,8 kV<div>Potência: 3 x 3,6 MVAr</div>"
        },
        {
          "yaw": 0.32935671462213456,
          "pitch": -0.12402633988929779,
          "title": "BC3",
          "text": "Tensão nominal: 13,8 kV<div>Potência: 3 x 3,6 MVAr</div>"
        }
      ]
    },
    {
      "id": "5-entrada-rea-de-risco",
      "name": "Entrada (Área de risco)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1076728839744234,
          "pitch": 0.07938599727387796,
          "rotation": 0,
          "target": "4-bancos-de-capacitor"
        },
        {
          "yaw": 0.015284568511519936,
          "pitch": -0.05215178479176075,
          "rotation": 0,
          "target": "6-trafos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-trafos",
      "name": "Trafos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.547017809812031,
          "pitch": 0.004418724030355037,
          "rotation": 0,
          "target": "5-entrada-rea-de-risco"
        },
        {
          "yaw": 1.488682997404748,
          "pitch": 0.09720485603397577,
          "rotation": 0,
          "target": "7-trafos-regio-do-tf3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0273902751683899,
          "pitch": -0.12732223415664023,
          "title": "<div>TGTF4-01</div>",
          "text": "<div><img src=\"img/tftf401.jpeg\" alt=\"TGTF4-01\" style='height: 100%; width: 100%; object-fit: contain'></div>"
        },
        {
          "yaw": -0.3062148332387231,
          "pitch": -0.1562051366750019,
          "title": "TGTF4-02",
          "text": "<div>Especificações:</div><div><br></div>- Tensão primária: 69 kV (D)<div>- Tensão secundária 13,8 kV (Yn)<br></div><div>- Potência: 26,6 MVA</div><div><br></div>"
        },
        {
          "yaw": 0.9648298835663827,
          "pitch": -0.10198908222691117,
          "title": "TGTF4-03",
          "text": "<div>Especificações:</div><div><br></div>- Tensão primária: 69 kV (D)<div>- Tensão secundária 13,8 kV (Yn)<br></div><div>- Potência: 26,6 MVA</div><div><br></div>"
        }
      ]
    },
    {
      "id": "7-trafos-regio-do-tf3",
      "name": "Trafos (região do TF3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4985358098076418,
          "pitch": 0.10875896428214205,
          "rotation": 0,
          "target": "6-trafos"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0742385164163402,
          "pitch": -0.09907209669772499,
          "title": "TGTF4-02",
          "text": "<div>Especificações:</div><div><br></div>- Tensão primária: 69 kV (D)<div>- Tensão secundária 13,8 kV (Yn)<br></div><div>- Potência: 26,6 MVA</div><div><br></div><div>- Fabricante: XXX</div><div>- Ano de fabricação: XXX</div>"
        },
        {
          "yaw": -0.28757242022388496,
          "pitch": -0.08785846542655129,
          "title": "TGTF4-03",
          "text": "<div>Especificações:</div><div><br></div>- Tensão primária: 69 kV (D)<div>- Tensão secundária 13,8 kV (Yn)<br></div><div>- Potência: 26,6 MVA</div><div><br></div><div>- Fabricante: XXX</div><div>- Ano de fabricação: XXX</div>"
        }
      ]
    }
  ],
  "name": "SE Tangará_v1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
