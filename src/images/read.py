import pandas as pd
import json
data = pd.read_excel("./wachira.xlsx")


data = data.fillna("XXXX")
print()
data[data.columns].to_json("wachira.json", orient='records')

