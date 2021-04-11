/*
 * @Author: Vir
 * @Date: 2021-03-14 15:22:13
 * @Last Modified by: Vir
 * @Last Modified time: 2021-04-11 12:18:24
 */

import { copyright as copyrightApi } from '@/apis/common';
import Copyright from '@/components/copyright';
import { ChangeLocales } from '@/components/global';
import SearchInput from '@/components/search-input';
import TopSites from '@/components/top-sites';
import { UpdateRecordDialog } from '@/components/update-record-dialog';
import { SearchEngineValueTypes } from '@/data/engine';
import { CopyrightType } from '@/data/main';
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import './index.less';

interface CopyrightTypeWithVersion extends CopyrightType {
  version?: string;
}

export default function IndexPage() {
  const [copyright, setCopyright] = useState({} as CopyrightTypeWithVersion);
  const [open, setOpen] = useState<boolean>(false);

  const getCopyright = () => {
    copyrightApi().then((res) => {
      setCopyright(res.data);
    });
  };

  useEffect(() => {
    getCopyright();
  }, []);

  const inputChange = (value: string, engine: SearchEngineValueTypes) => {
    console.log('search', value, engine);
  };

  const handleSearch = (value: string, engine: SearchEngineValueTypes) => {
    window.open(`${engine.href}${value}`);
  };

  const { formatMessage } = useIntl();
  return (
    <div className="index">
      <div className="index-navbar-box">
        <ChangeLocales />
      </div>
      <div className="index-logo-box"></div>
      <div className="index-search-box">
        <SearchInput
          autoFocus
          onChange={inputChange}
          onBtnClick={handleSearch}
          placeholder={formatMessage({
            id: 'app.page.index.searchinput.placeholder',
          })}
          primaryText={formatMessage({
            id: 'app.page.index.searchinput.submitbutton',
          })}
          onPressEnter={handleSearch}
        ></SearchInput>
      </div>
      <div className="index-content-box">
        <TopSites></TopSites>
      </div>
      <div className="index-copyright-box">
        {copyright && (
          <Copyright
            author={copyright.author}
            href={copyright.href}
            startTime={copyright.startTime}
          ></Copyright>
        )}
        <Button onClick={() => setOpen(true)}>
          {formatMessage({ id: 'app.component.uploadrecorddialog.title' })}
        </Button>
      </div>
      <UpdateRecordDialog
        open={open}
        onClose={() => setOpen(false)}
      ></UpdateRecordDialog>
    </div>
  );
}
