Search.setIndex({"docnames": ["architecture", "cloud_object", "concepts", "index", "install", "preproc-backends", "preprocessing_backends/dummy", "preprocessing_backends/lithops", "types/columnar", "types/genomics", "types/geospatial", "types/text", "workflow_sample"], "filenames": ["architecture.rst", "cloud_object.rst", "concepts.rst", "index.rst", "install.rst", "preproc-backends.rst", "preprocessing_backends/dummy.rst", "preprocessing_backends/lithops.rst", "types/columnar.rst", "types/genomics.rst", "types/geospatial.rst", "types/text.rst", "workflow_sample.rst"], "titles": ["Architecture", "CloudObject", "Concepts", "Dataplug", "Install", "Pre-processing backends", "Dummy Pre-processing backend", "Lithops Pre-processing backend", "Columnar", "Genomics", "Geospatial", "Text", "Example application: FASTQGZip partitioning"], "terms": {"dataplug": [0, 1, 2, 4, 12], "": [0, 2], "primari": 0, "goal": 0, "i": [0, 1, 2, 4, 12], "simplifi": 0, "whole": 0, "unstructur": [0, 2, 3], "scientif": [0, 2], "more": [0, 2, 3], "specif": [0, 2, 3], "facilit": 0, "pre": [0, 1, 2, 3], "process": [0, 1, 2, 3], "its": [0, 2, 12], "metadata": [0, 1, 2, 3, 12], "provid": [0, 2, 4], "mechan": 0, "parallel": [0, 2, 3, 12], "automat": 0, "resourc": 0, "provis": 0, "depend": 0, "volum": 0, "partit": [0, 1, 3, 4], "enabl": [0, 2, 3], "access": [0, 2, 3, 12], "directli": [0, 2, 3], "from": [0, 1, 2, 3, 4, 12], "object": [0, 1, 2, 3, 4, 12], "storag": [0, 1, 2, 3, 4, 12], "base": [0, 1, 2, 12], "distribut": [0, 2, 3, 12], "workload": [0, 2, 3], "compat": [0, 4], "popular": 0, "comput": [0, 2, 12], "framework": [0, 12], "pyspark": [0, 3], "dask": [0, 3], "rai": [0, 3], "thu": 0, "achiev": 0, "portabl": [0, 3], "standard": 0, "mani": [0, 2, 12], "possibl": 0, "place": 0, "special": 0, "emphasi": 0, "being": [0, 2], "extens": [0, 2, 3], "all": [0, 2, 3], "level": 0, "allow": [0, 2], "implement": [0, 2, 3, 12], "new": [0, 2, 3, 12], "nativ": [0, 1, 3, 12], "model": [0, 2], "featur": 0, "type": [0, 1, 12], "techniqu": [0, 3], "strategi": [0, 1, 2, 3, 12], "well": [0, 2], "execut": [0, 1], "backend": [0, 1, 3, 12], "first": [0, 1, 2, 4], "raw": [0, 2], "store": [0, 2, 3, 12], "bucket": [0, 1, 2, 4], "thi": [0, 1, 2, 4, 12], "ha": [0, 2, 12], "been": 0, "yet": 0, "The": [0, 1, 2, 12], "doe": [0, 1, 2, 3], "requir": [0, 2], "write": 0, "permiss": 0, "sourc": 0, "so": [0, 2, 3, 4], "could": [0, 2], "also": [0, 3], "read": [0, 2, 12], "onli": [0, 2, 12], "public": 0, "open": [0, 1, 2], "repositori": 0, "can": [0, 2, 3, 4, 12], "promot": [0, 2, 3], "appli": [0, 1, 2, 4, 12], "correspond": [0, 12], "gener": [0, 2, 3, 12], "stage": [0, 2], "extract": [0, 2], "attribut": [0, 1, 2, 12], "which": [0, 2, 3, 12], "ar": [0, 2, 3], "after": [0, 2], "queri": 0, "final": [0, 12], "creat": [0, 2, 4, 12], "slice": [0, 2, 12], "certain": 0, "user": [0, 2, 3, 12], "now": [0, 4, 12], "submit": [0, 12], "job": [0, 1, 3, 12], "us": [0, 2, 3, 4, 12], "some": [0, 2, 4], "python": [0, 3, 12], "lithop": [0, 3, 5], "pass": [0, 1], "set": [0, 2, 4], "input": [0, 2, 12], "take": [0, 2], "care": 0, "deploi": [0, 4], "worker": [0, 2, 12], "scatter": [0, 2, 12], "among": 0, "them": [0, 3], "A": [0, 2], "receiv": [0, 12], "evalu": [0, 2, 12], "fetch": [0, 1, 2], "content": [0, 2], "embed": [0, 2], "code": [0, 2, 3, 12], "perform": [0, 2, 12], "byte": [0, 1, 2, 12], "rang": [0, 2, 12], "http": [0, 2, 3, 4], "get": [0, 1, 2, 3, 4, 12], "request": [0, 1, 2, 12], "over": 0, "one": [0, 2, 3, 12], "retriev": [0, 2, 12], "chunk": [0, 2, 12], "assembl": [0, 2], "necessari": [0, 2, 12], "correct": [0, 2], "befor": [0, 2], "back": 0, "logic": 0, "class": [1, 12], "repres": [1, 2], "programmat": 1, "refer": [1, 4, 12], "an": [1, 2, 3, 4, 12], "s3": [1, 2, 3, 4, 12], "associ": [1, 2, 12], "cloud": [0, 1, 3, 4, 12], "data": [0, 1, 3, 4, 12], "data_typ": 1, "s3_uri_path": 1, "s3_config": 1, "none": 1, "paramet": [1, 2], "clouddatatyp": [1, 12], "str": [1, 12], "full": [1, 12], "uri": [1, 12], "kei": [1, 2, 4], "dict": 1, "extra": 1, "config": 1, "async_preprocess": 1, "preprocessor_backend": 1, "forc": 1, "fals": 1, "ignor": 1, "arg": 1, "kwarg": 1, "manual": [1, 2], "launch": 1, "preprocess": [1, 3, 12], "specifi": [1, 12], "preprocessorbackendbas": 1, "preprocessor": [1, 12], "instanc": [1, 2, 12], "bool": 1, "even": 1, "alreadi": [1, 2], "rais": 1, "except": 1, "option": 1, "argument": [1, 2], "return": [1, 12], "preprocessingjobfutur": 1, "param": 1, "keyword": 1, "properti": 1, "ani": [1, 2, 3], "exist": [1, 2], "enforce_obj": 1, "true": 1, "enforce_meta": 1, "head": 1, "keyerror": 1, "found": 1, "tupl": 1, "data_object": 1, "meta_object": 1, "attrs_objet": 1, "classmethod": 1, "from_s3": [1, 4, 12], "cloud_object_class": 1, "s3_path": 1, "get_attribut": 1, "must": [1, 2], "attributeerror": 1, "is_preprocess": 1, "meta_path": 1, "pures3path": 1, "s3path": 1, "meta_s": 1, "int": [1, 12], "size": [1, 2, 3, 12], "new_from_fil": 1, "file_path": 1, "cloud_path": 1, "smart_open": 1, "function": [1, 2, 12], "word": 1, "list": [1, 12], "cloudobjectslic": [1, 12], "path": 1, "page": [2, 12], "introduc": 2, "core": 2, "In": [2, 3, 12], "each": [2, 3, 12], "conceptu": 2, "format": [2, 3], "when": 2, "effici": [2, 3], "It": 2, "becaus": 2, "structur": 2, "alter": 2, "instead": 2, "we": [2, 4, 12], "index": [2, 3, 12], "outsid": 2, "file": [2, 3, 4, 12], "later": [2, 3, 12], "obtain": 2, "granular": 2, "portion": 2, "account": 2, "api": [2, 4], "catch": 2, "reusabl": [2, 3], "given": 2, "onc": [2, 12], "compos": [2, 12], "follow": [2, 12], "element": 2, "arbitrari": [2, 3], "blob": 2, "delta": 2, "compli": 2, "known": 2, "delta_": 2, "m": 2, "describ": [2, 12], "e": [2, 4], "valu": 2, "mathcal": 2, "relat": 2, "preproc": 2, "output": 2, "p": [2, 4], "s_": 2, "0": [2, 4], "1": [2, 4, 12], "ldot": 2, "n": 2, "concret": 2, "To": 2, "abov": [2, 12], "particular": 2, "g": [2, 4], "my": 2, "impor": 2, "csv": 2, "There": 2, "varou": 2, "domain": 2, "document": 2, "here": [2, 4], "defin": [2, 3, 12], "method": [2, 12], "characterist": 2, "intern": 2, "indic": 2, "impos": [2, 3], "restrict": 2, "adapt": 2, "need": [2, 3, 4, 12], "impli": 2, "exampl": 2, "aw": [2, 3, 4], "registri": 2, "nevertheless": 2, "unifi": 2, "end": 2, "have": 2, "manag": [0, 2, 3], "separ": 2, "applic": [2, 3], "For": 2, "calcul": [2, 12], "virtual": 2, "view": [2, 12], "work": [2, 4], "actual": 2, "result": [2, 12], "entiti": 2, "lazili": 2, "encapsul": 2, "recov": 2, "against": 2, "analysi": 2, "local": [2, 4], "memori": 2, "procedur": 2, "within": 2, "leverag": [2, 3], "differ": 2, "case": [2, 12], "avoid": [2, 3], "load": 2, "done": [2, 12], "exploit": 2, "high": 2, "synchron": 2, "free": 2, "bandwidth": 2, "serializ": 2, "sent": 2, "remot": 2, "contrari": 2, "static": [2, 3], "dataset": [2, 3], "fix": 2, "our": [2, 4], "dynam": 2, "fly": [2, 3], "balanc": 2, "librari": 3, "like": 3, "benefit": 3, "consumpt": 3, "highli": 3, "put": 3, "costli": 3, "etl": 3, "ideal": 3, "fit": 3, "mai": 3, "involv": 3, "potenti": 3, "duplic": 3, "alwai": 3, "hand": 3, "addit": [3, 12], "publish": 3, "share": 3, "publicli": 3, "via": 3, "plugin": 3, "other": [3, 12], "good": 3, "practic": 3, "optim": 3, "serverless": [3, 12], "your": [3, 4], "favourit": 3, "analyt": 3, "cluster": [3, 12], "googl": 3, "premis": 3, "without": 3, "server": [3, 4], "dummi": [3, 5], "hello": [6, 7, 8, 9, 10, 11], "2": [8, 9, 10, 11, 12], "With": 12, "decor": 12, "where": 12, "processor": 12, "hierarchi": 12, "workflow": 12, "step": 12, "gzippreprocessor": 12, "number_of_sequ": 12, "experiment_id": 12, "see": 12, "multipl": 12, "number": 12, "genom": [3, 12], "sequenc": 12, "experi": 12, "id": 12, "batchpreprocessor": 12, "staticmethod": 12, "def": 12, "self": 12, "cloud_object": 12, "cloudobject": [3, 4, 12], "stream": 12, "get_object": 12, "gztool": 12, "n_line": 12, "generate_gzip_index": 12, "n_sequenc": 12, "no_lin": 12, "4": 12, "preprocessingmetadata": 12, "no_sequ": 12, "batch": 12, "gzip": 12, "co": [4, 12], "my_bucket": 12, "srr123456": 12, "fastqgz": 12, "awsec2preprocessor": 12, "sequence_identifi": 12, "srr0000000": 12, "locat": 12, "assign": 12, "awsec2preprocesor": 12, "architectur": 3, "3": 12, "next": [4, 12], "partition_num_read": 12, "num_seq_partit": 12, "fastqgziptextslic": 12, "split": 12, "per": 12, "line": 12, "n_part": 12, "lpp": 12, "ceil": 12, "linepair": 12, "byterang": 12, "get_byterang": 12, "range_0": 12, "range_1": 12, "offset": 12, "entri": 12, "point": 12, "total": 12, "regardless": 12, "phase": 12, "util": 12, "earlier": 12, "gziptextslic": 12, "emb": 12, "f": 12, "line_0": 12, "line_1": 12, "decompress_gzip": 12, "call": 12, "decompress": 12, "data_slic": [4, 12], "1_000_000": 12, "process_sequ": 12, "fastq": 12, "ipyparallel": 12, "load_balanced_view": 12, "map": 12, "5": [4, 12], "consum": 12, "concept": 3, "life": 0, "cycl": 0, "fastqgzip": 3, "text": [3, 4], "utf": 3, "columnar": 3, "geospati": 3, "instal": 3, "you": 4, "pip": 4, "quickstart": 3, "clone": 4, "master": 4, "branch": 4, "github": 4, "git": 4, "com": 4, "cloudlab": 4, "urv": 4, "cd": 4, "guid": 4, "test": 4, "minio": 4, "docker": 4, "run": 4, "9000": 4, "9001": 4, "v": 4, "quai": 4, "io": 4, "consol": 4, "address": 4, "up": 4, "default": 4, "export": 4, "aws_access_key_id": 4, "minioadmin": 4, "aws_secret_access_kei": 4, "deploy": 4, "cli": 4, "upload": 4, "configur": 4, "signature_vers": 4, "s3v4": 4, "endpoint": 4, "url": 4, "127": 4, "s3api": 4, "And": 4, "wget": 4, "qo": 4, "www": 4, "gutenberg": 4, "org": 4, "cach": 4, "epub": 4, "1513": 4, "pg1513": 4, "txt": 4, "cp": 4, "mobi": 4, "dick": 4, "utf8text": 4, "s3config": 4, "endpoint_url": 4, "whole_words_strategi": 4, "num_chunk": 4, "200": 4, "print": 4}, "objects": {"dataplug.cloudobject": [[1, 0, 1, "", "CloudObject"]], "dataplug.cloudobject.CloudObject": [[1, 1, 1, "", "async_preprocess"], [1, 2, 1, "", "attributes"], [1, 1, 1, "", "exists"], [1, 1, 1, "", "fetch"], [1, 1, 1, "", "from_s3"], [1, 1, 1, "", "get_attribute"], [1, 1, 1, "", "is_preprocessed"], [1, 2, 1, "", "meta_path"], [1, 2, 1, "", "meta_size"], [1, 1, 1, "", "new_from_file"], [1, 2, 1, "", "open"], [1, 1, 1, "", "partition"], [1, 2, 1, "", "path"], [1, 1, 1, "", "preprocess"], [1, 2, 1, "", "s3"], [1, 2, 1, "", "size"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:property"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "property", "Python property"]}, "titleterms": {"architectur": 0, "cloud": 2, "data": 2, "manag": [], "life": [], "cycl": [], "cloudobject": 1, "concept": 2, "nativ": 2, "type": [2, 3], "partit": [2, 12], "dataplug": 3, "what": 3, "i": 3, "pre": [5, 6, 7, 12], "process": [5, 6, 7, 12], "backend": [5, 6, 7], "dummi": 6, "lithop": 7, "columnar": 8, "utf": [8, 9, 10, 11], "genom": 9, "geospati": 10, "text": 11, "exampl": [3, 12], "applic": 12, "fastqgzip": 12, "framework": 3, "api": 3, "refer": 3, "built": 3, "instal": 4, "quickstart": 4}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"CloudObject": [[1, "cloudobject"]], "Concepts": [[2, "concepts"]], "Cloud-native data types": [[2, "cloud-native-data-types"]], "Data partitioning": [[2, "data-partitioning"]], "Dummy Pre-processing backend": [[6, "dummy-pre-processing-backend"]], "Lithops Pre-processing backend": [[7, "lithops-pre-processing-backend"]], "Columnar": [[8, "columnar"]], "UTF": [[8, "utf"], [9, "utf"], [10, "utf"], [11, "utf"]], "Genomics": [[9, "genomics"]], "Geospatial": [[10, "geospatial"]], "Text": [[11, "text"]], "Example application: FASTQGZip partitioning": [[12, "example-application-fastqgzip-partitioning"]], "Pre-processing": [[12, "pre-processing"]], "Partitioning": [[12, "partitioning"]], "Architecture": [[0, "architecture"]], "Dataplug": [[3, "dataplug"]], "What is dataplug?": [[3, "what-is-dataplug"]], "Dataplug framework": [[3, null]], "API Reference": [[3, null]], "Built-in types": [[3, null]], "Example": [[3, null]], "Pre-processing backends": [[5, "pre-processing-backends"]], "Install": [[4, "install"]], "Quickstart": [[4, "quickstart"]]}, "indexentries": {}})