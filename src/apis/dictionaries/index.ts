import { defHttp } from '/@/utils/http/axios';

import type { SearchParameters, PageResult } from '/@/apis/models';
import type { DictionaryEntity } from './models/DictionaryEntity';

enum URL {
  list = '/dictionaries',
}

export function listDictionaries(params: SearchParameters) {
  return defHttp.get<PageResult<DictionaryEntity>>(
    { url: URL.list, params },
    { joinParamsToUrl: true },
  );
}

export { DictionaryEntity };
