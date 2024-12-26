/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Stack from '@mui/material/Stack';
import { memo } from 'react';
import { ReaderSettingReadingMode } from '@/modules/reader/components/settings/layout/ReaderSettingReadingMode.tsx';
import { ReaderSettingReadingDirection } from '@/modules/reader/components/settings/layout/ReaderSettingReadingDirection.tsx';
import { ReaderService } from '@/modules/reader/services/ReaderService.ts';
import { useReaderStateMangaContext } from '@/modules/reader/contexts/state/ReaderStateMangaContext.tsx';
import { DefaultSettingFootnote } from '@/modules/reader/components/settings/DefaultSettingFootnote.tsx';
import { IReaderSettingsWithDefaultFlag, TReaderStateMangaContext } from '@/modules/reader/types/Reader.types.ts';
import { withPropsFrom } from '@/modules/core/hoc/withPropsFrom.tsx';
import { FALLBACK_MANGA } from '@/modules/manga/Manga.constants.ts';

const BaseReaderBottomBarMobileQuickSettings = ({
    manga,
    readingMode,
    readingDirection,
}: Pick<TReaderStateMangaContext, 'manga'> &
    Pick<IReaderSettingsWithDefaultFlag, 'readingMode' | 'readingDirection'>) => {
    const deleteSetting = ReaderService.useCreateDeleteSetting(manga ?? FALLBACK_MANGA);

    if (!manga) {
        return null;
    }

    return (
        <Stack sx={{ gap: 2 }}>
            <DefaultSettingFootnote />
            <ReaderSettingReadingMode
                readingMode={readingMode}
                setReadingMode={(value) => ReaderService.updateSetting(manga, 'readingMode', value)}
                isDefaultable
                onDefault={() => deleteSetting('readingMode')}
            />
            <ReaderSettingReadingDirection
                readingDirection={readingDirection}
                setReadingDirection={(value) => ReaderService.updateSetting(manga, 'readingDirection', value)}
                isDefaultable
                onDefault={() => deleteSetting('readingDirection')}
            />
        </Stack>
    );
};

export const ReaderBottomBarMobileQuickSettings = withPropsFrom(
    memo(BaseReaderBottomBarMobileQuickSettings),
    [useReaderStateMangaContext, ReaderService.useSettings],
    ['manga', 'readingMode', 'readingDirection'],
);
